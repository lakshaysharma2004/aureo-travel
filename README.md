# Aureo Travel

A premium travel destination platform showcasing India's most iconic cities and curated travel packages. Built with modern web technologies for performance, scalability, and maintainability.

## Project Overview

Aureo Travel is a Next.js-based web application designed to provide users with personalized travel experiences. The platform features a clean, responsive interface showcasing various destinations with detailed information about attractions, best visiting times, and customized travel packages.

The application is structured with a focus on scalability, type safety, and component reusability. It utilizes static data management for destinations and packages, making it ideal for content-driven applications.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Architecture**: Component-based with TypeScript interfaces
- **Data Layer**: Static imports with type-safe interfaces

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── destinations/
│       ├── page.tsx        # Destinations listing page
│       └── [slug]/
│           └── page.tsx    # Dynamic city detail page
├── components/
│   └── CityCard.tsx        # Reusable city card component
├── data/
│   ├── cities.ts           # City data and exports
│   └── packages.ts         # Travel package data
├── types/
│   ├── city.ts             # City interface definition
│   └── package.ts          # TravelPackage interface definition
└── lib/
    └── (Utility functions)
```

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd aureo-travel
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

The application will automatically reload as you make changes to files.

## Available Routes

| Route                  | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `/`                    | Homepage with hero section and featured destinations  |
| `/destinations`        | Browse all available travel destinations              |
| `/destinations/delhi`  | Detailed view of Delhi with attractions and packages  |
| `/destinations/agra`   | Detailed view of Agra with attractions and packages   |
| `/destinations/jaipur` | Detailed view of Jaipur with attractions and packages |

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Routing**: City pages generated from slug parameters
- **Type Safety**: Full TypeScript support with strict mode enabled
- **Reusable Components**: CityCard component for consistent UI patterns
- **Static Data Management**: Centralized city and package data
- **Clean Architecture**: Organized folder structure for scalability

## Collaboration Guidelines

### Branch Strategy

- Use feature branches for all development work
- Branch naming convention: `feature/description` or `bugfix/description`
- Example: `feature/add-booking-page`, `bugfix/fix-navigation`

### Commit Workflow

1. Create a feature branch from `main`:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit with descriptive messages:

```bash
git add .
git commit -m "Description of changes"
```

3. Push your branch:

```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request for code review
5. After approval, merge to `main`

### Important

- **No direct commits to main** - All changes must go through Pull Request reviews
- Keep commits atomic and focused
- Write descriptive commit messages
- Follow the existing code style and patterns

## Development Workflow

### Adding a New City

1. Add city data to `src/data/cities.ts`
2. Update `src/types/city.ts` if adding new fields
3. The city will automatically appear on `/destinations`

### Adding a New Package

1. Add package data to `src/data/packages.ts`
2. The package will automatically display on relevant city detail pages

### Creating New Components

1. Create component files in `src/components/`
2. Use TypeScript interfaces for props
3. Export component as default export
4. Use Tailwind CSS for styling

## Future Roadmap

### Phase 1 - Enhanced Features

- Booking system with date selection
- User authentication and profiles
- Booking history and saved trips
- Payment integration

### Phase 2 - Content Expansion

- Add more destinations
- Hotel and accommodation listings
- Restaurant integration and reviews
- Activity booking system

### Phase 3 - Advanced Features

- User ratings and testimonials
- Itinerary builder
- Real-time availability checking
- Email notifications

### Phase 4 - Performance & Analytics

- Image optimization (WebP, lazy loading)
- SEO enhancements
- Analytics integration
- Performance monitoring

## Build & Production

To build for production:

```bash
npm run build
npm run start
```

The production build will be optimized for performance with Next.js automatic optimizations.

## Contributing

Contributions are welcome! Please follow the collaboration guidelines above and ensure all code passes TypeScript checks before submitting a Pull Request.

## License

This project is proprietary and confidential.
