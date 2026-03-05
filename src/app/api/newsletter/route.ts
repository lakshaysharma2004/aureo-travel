import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (in production, use Redis or similar)
const subscriptions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  
  if (!subscriptions.has(ip)) {
    subscriptions.set(ip, [now]);
    return false;
  }
  
  const timestamps = subscriptions.get(ip)!.filter(t => now - t < oneHour);
  
  if (timestamps.length >= 3) {
    return true;
  }
  
  timestamps.push(now);
  subscriptions.set(ip, timestamps);
  return false;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Log the subscription (in production, integrate with email service)
    console.log(`Newsletter subscription: ${email} from IP: ${ip}`);

    // TODO: Integrate with email service provider (Mailchimp, SendGrid, etc.)
    // await emailService.subscribe(email);

    return NextResponse.json(
      { 
        message: "Thanks! We'll keep you updated with our latest travel packages and guides.",
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to process subscription. Please try again." },
      { status: 500 }
    );
  }
}
