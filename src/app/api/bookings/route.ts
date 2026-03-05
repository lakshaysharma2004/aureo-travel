import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const bookingData = await request.json();

    // Log the booking data to server console
    console.log("=== New Booking Submission ===");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Package:", bookingData.package);
    console.log("Package Slug:", bookingData.packageSlug);
    console.log("Full Name:", bookingData.fullName);
    console.log("Email:", bookingData.email);
    console.log("Phone:", bookingData.phone);
    console.log("Travel Date:", bookingData.travelDate);
    console.log("Number of Travelers:", bookingData.numTravelers);
    console.log("Special Requests:", bookingData.specialRequests || "None");
    console.log("==============================");

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: "Booking request received successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { 
        success: false,
        message: "Failed to process booking request"
      },
      { status: 500 }
    );
  }
}
