# Uttarakhand State Veterinary Council Website v4

A complete replica of the UKVC website built with Next.js, featuring dynamic content management, user registration system, and admin dashboard with Neon database integration.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Easy content management through admin panel
- **User Registration**: Complete veterinary registration system
- **Database Integration**: PostgreSQL with Neon for data storage
- **Admin Dashboard**: Manage registrations, content, and settings
- **File Upload**: Document upload for registrations
- **Veterinarian Directory**: Searchable directory with detailed profiles
- **Downloads Section**: Consolidated downloadable resources
- **Gallery Management**: Photo gallery with categories
- **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: PostgreSQL (Neon)
- **ORM**: Direct SQL with @neondatabase/serverless
- **File Storage**: Vercel Blob (for file uploads)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- Neon PostgreSQL database
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd ukvc-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   # Neon Database
   DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
   
   # File Upload (Vercel Blob) - Optional
   BLOB_READ_WRITE_TOKEN="your-blob-token"
   
   # Email (for notifications) - Optional
   SMTP_HOST="your-smtp-host"
   SMTP_PORT="587"
   SMTP_USER="your-email"
   SMTP_PASS="your-password"
   \`\`\`

4. **Set up the database**
   Run the SQL scripts in your Neon console:
   \`\`\`bash
   # First run: scripts/neon-schema.sql
   # Then run: scripts/neon-seed.sql
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup (Neon)

### 1. Create Neon Database

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy the connection string
4. Add it to your `.env.local` as `DATABASE_URL`

### 2. Run Database Scripts

1. Open Neon Console → SQL Editor
2. Copy and run `scripts/neon-schema.sql`
3. Copy and run `scripts/neon-seed.sql`

## Project Structure

\`\`\`
ukvc-website/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard
│   │   └── content/       # Content management
│   ├── api/               # API routes
│   │   ├── registration/  # Registration API
│   │   ├── veterinarians/ # Veterinarians API
│   │   ├── content/       # Content management API
│   │   └── committee-members/ # Committee API
│   ├── veterinarians/     # Veterinarian directory
│   │   └── [id]/         # Individual veterinarian pages
│   ├── downloads/         # Downloads page
│   └── (other pages)/     # Other website pages
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Site header
│   └── footer.tsx        # Site footer
├── lib/                  # Utility functions
│   └── neon.ts          # Neon database utilities
├── scripts/              # Database scripts
│   ├── neon-schema.sql   # Database schema
│   └── neon-seed.sql     # Initial data
└── public/               # Static assets
\`\`\`

## Key Features

### 1. Veterinarian Directory
- **Searchable Directory**: Search by name, address, qualification, or registration number
- **Detailed Profiles**: Individual pages for each veterinarian with complete information
- **Contact Information**: Phone, email, and address details
- **Registration Details**: IVPR numbers, expiry dates, and remarks

### 2. Content Management System
- **Editable Content**: Update website content through admin panel
- **Committee Management**: Manage committee member information and photos
- **Dynamic Updates**: Real-time content updates without code changes

### 3. Downloads Section
- **Organized Categories**: Acts & Rules, Forms, Reports, Circulars, etc.
- **File Management**: Easy addition and removal of downloadable files
- **Download Tracking**: Monitor download counts and usage

### 4. Admin Dashboard
- **Registration Management**: View, approve, or reject applications
- **Content Management**: Update website content and committee information
- **Statistics**: View registration statistics and trends

## API Endpoints

### Public Endpoints
- `GET /api/veterinarians` - Get all veterinarians
- `POST /api/registration` - Submit new registration

### Admin Endpoints
- `GET /api/registration` - Get all registrations (admin)
- `PUT /api/content` - Update website content
- `GET /api/content` - Get website content
- `GET /api/committee-members` - Get committee members
- `PUT /api/committee-members` - Update committee member

## Database Schema

### Main Tables
- `veterinarians` - Veterinarian directory with complete profiles
- `registrations` - Registration applications
- `website_content` - Editable website content
- `committee_members` - Council members and officials
- `downloads` - Downloadable files and documents
- `gallery_images` - Photo gallery with categories
- `notices` - Public notices and announcements

## Content Management

### Updating Website Content
1. Access `/admin/content`
2. Select "Website Content" tab
3. Edit content directly in the form fields
4. Click "Update Content" to save changes

### Managing Committee Members
1. Access `/admin/content`
2. Select "Committee Members" tab
3. Update member information, positions, and photos
4. Changes reflect immediately on the website

### Adding New Veterinarians
Veterinarians can be added through:
1. Database direct insertion
2. Admin panel (future feature)
3. Registration approval process

## Deployment

### Deploy to Vercel

1. **Connect to Vercel**
   \`\`\`bash
   npm i -g vercel
   vercel login
   vercel
   \`\`\`

2. **Set environment variables** in Vercel dashboard
   - `DATABASE_URL` (from Neon)
   - Other optional variables

3. **Deploy**
   \`\`\`bash
   vercel --prod
   \`\`\`

## Security Features

- **Input Validation**: All forms include proper validation
- **SQL Injection Prevention**: Parameterized queries with Neon
- **File Upload Security**: Restricted file types and sizes
- **Environment Variables**: Sensitive data stored securely
- **Error Handling**: Proper error handling and logging

## Performance Optimizations

- **Database Indexing**: Optimized indexes for fast queries
- **Image Optimization**: Next.js automatic image optimization
- **Caching**: Efficient caching strategies
- **Lazy Loading**: Components and images loaded on demand

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For technical support or questions:
- Email: support@ukvc.in
- Phone: +91-XXXXXXXXXX
- Office Hours: Mon-Fri, 10:00 AM - 5:00 PM

## License

This project is developed for the Uttarakhand State Veterinary Council.

## Changelog

### v4.0.0
- Migrated from Supabase to Neon database
- Enhanced veterinarian directory with detailed profiles
- Improved content management system
- Added comprehensive downloads section
- Better admin dashboard with real-time updates
- Optimized database queries and performance
