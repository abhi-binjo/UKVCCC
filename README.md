# Uttarakhand State Veterinary Council Website

A complete replica of the UKVC website built with Next.js, featuring dynamic content management, user registration system, and admin dashboard.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Easy content management through admin panel
- **User Registration**: Complete veterinary registration system
- **Database Integration**: PostgreSQL with Neon for data storage
- **Admin Dashboard**: Manage registrations, content, and settings
- **File Upload**: Document upload for registrations
- **Email Notifications**: Automated confirmation emails
- **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: PostgreSQL (Neon)
- **Authentication**: NextAuth.js (for admin)
- **File Storage**: Vercel Blob
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon recommended)
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
   # Database
   DATABASE_URL="postgresql://username:password@host:port/database"
   
   # NextAuth (for admin authentication)
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   
   # Email (for notifications)
   SMTP_HOST="your-smtp-host"
   SMTP_PORT="587"
   SMTP_USER="your-email"
   SMTP_PASS="your-password"
   
   # File Upload (Vercel Blob)
   BLOB_READ_WRITE_TOKEN="your-blob-token"
   \`\`\`

4. **Set up the database**
   Run the SQL scripts to create tables:
   \`\`\`bash
   # Connect to your database and run:
   # scripts/create-database.sql
   # scripts/seed-data.sql
   \`\`\`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
ukvc-website/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Main website pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Site header
│   └── footer.tsx        # Site footer
├── lib/                  # Utility functions
├── scripts/              # Database scripts
└── public/               # Static assets
\`\`\`

## Key Pages

- **Homepage** (`/`): Main landing page with officials and quick links
- **Registration** (`/registration`): Veterinary registration form
- **Services** (`/services`): List of all available services
- **About** (`/about`): Information about UKVC
- **Gallery** (`/gallery`): Photo gallery with categories
- **Contact** (`/contact`): Contact information and form
- **Admin** (`/admin`): Admin dashboard for content management

## Database Schema

### Main Tables

- `registrations`: Store veterinary registration applications
- `notices`: Public notices and announcements
- `committee_members`: Council members and officials
- `gallery_images`: Gallery photos with categories
- `website_settings`: Configurable site settings
- `admin_users`: Admin user accounts

## Admin Features

Access the admin dashboard at `/admin` to:

- **Manage Registrations**: View, approve, or reject applications
- **Content Management**: Add/edit notices, gallery images
- **Settings**: Update contact information, fees, etc.
- **User Management**: Manage admin accounts

## Content Management

### Adding Public Notices
1. Go to Admin Dashboard → Content Management
2. Fill in notice title and content
3. Click "Publish Notice"

### Managing Gallery
1. Upload images through the admin panel
2. Categorize images (office, events, ceremonies, etc.)
3. Add descriptions and titles

### Updating Settings
1. Access Admin Dashboard → Settings
2. Update contact information, fees, addresses
3. Save changes

## Deployment

### Deploy to Vercel

1. **Connect to Vercel**
   \`\`\`bash
   npm i -g vercel
   vercel login
   vercel
   \`\`\`

2. **Set environment variables** in Vercel dashboard

3. **Deploy**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Database Setup (Neon)

1. Create a Neon database
2. Run the SQL scripts in `scripts/` folder
3. Update `DATABASE_URL` in environment variables

## Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind config in `tailwind.config.ts`
- Customize components in `components/` directory

### Content
- Update official information in `app/page.tsx`
- Modify navigation in `components/header.tsx`
- Change contact details in `components/footer.tsx`

### Features
- Add new services in `app/services/page.tsx`
- Create additional pages in `app/` directory
- Extend database schema as needed

## API Endpoints

- `POST /api/registration` - Submit new registration
- `GET /api/registration` - Get all registrations (admin)
- `PATCH /api/registration/[id]` - Update registration status
- `POST /api/notices` - Add new notice
- `GET /api/notices` - Get all notices

## Security

- Input validation on all forms
- SQL injection prevention with parameterized queries
- File upload restrictions (PDF only)
- Admin authentication required for sensitive operations
- Environment variables for sensitive data

## Support

For technical support or questions:
- Email: support@ukvc.in
- Phone: +91-XXXXXXXXXX

## License

This project is developed for the Uttarakhand State Veterinary Council.
