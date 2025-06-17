-- Insert sample data for UKVC website

-- Insert website settings
INSERT INTO website_settings (setting_key, setting_value, description) VALUES
('site_name', 'Uttarakhand State Veterinary Council', 'Main website title'),
('contact_email', 'info@ukvc.in', 'Primary contact email'),
('contact_phone', '+91-XXXXXXXXXX', 'Primary contact phone'),
('office_address', 'Uttarakhand State Veterinary Council, Dehradun, Uttarakhand', 'Office address'),
('registration_fee_new', '2000', 'New registration fee in INR'),
('registration_fee_renewal', '1000', 'License renewal fee in INR'),
('registration_fee_transfer', '500', 'Transfer certificate fee in INR')
ON CONFLICT (setting_key) DO NOTHING;

-- Insert committee members (officials from the image)
INSERT INTO committee_members (name, position, department, display_order, is_active) VALUES
('Shri Pushkar Singh Dhami', 'Honorable Chief Minister', 'Uttarakhand', 1, true),
('Shri Saurabh Bahaguna', 'Honorable Minister', 'Animal Husbandry, Fisheries', 2, true),
('Dr. B.V.R.C Purushottam', 'Secretary', 'Animal Husbandry, Dairy And Fisheries', 3, true),
('Dr. Neeraj Singhal', 'Director', 'Animal Husbandry Department, Uttarakhand', 4, true),
('Dr. Kailash Uniyal', 'President', 'Uttarakhand State Veterinary Council', 5, true),
('Dr. Pralayankar Nath', 'Registrar', 'Uttarakhand State Veterinary Council', 6, true);

-- Insert sample public notices
INSERT INTO notices (title, content, is_active) VALUES
('New Registration Process - Online Portal Launch', 'We are pleased to announce the launch of our new online registration portal. All new registrations and renewals can now be completed online. Please visit the Registration section for more details.', true),
('Annual General Meeting 2024', 'The Annual General Meeting of Uttarakhand State Veterinary Council will be held on [Date] at [Venue]. All registered members are requested to attend.', true),
('Updated Fee Structure', 'The fee structure for various services has been updated. Please check the latest fee structure in the Services section before making any payments.', true),
('Continuing Education Program', 'UKVC is organizing a continuing education program for all registered veterinarians. Details will be shared soon.', true);

-- Insert sample gallery categories and images
INSERT INTO gallery_images (title, description, category, image_url, is_active) VALUES
('UKVC Office Building', 'Main office building of Uttarakhand State Veterinary Council', 'office', '/placeholder.svg?height=300&width=400', true),
('Annual Conference 2023', 'Annual conference of veterinarians held in Dehradun', 'events', '/placeholder.svg?height=300&width=400', true),
('Registration Ceremony', 'New veterinarians receiving their registration certificates', 'ceremonies', '/placeholder.svg?height=300&width=400', true),
('Veterinary Camp', 'Free veterinary camp organized in rural areas', 'camps', '/placeholder.svg?height=300&width=400', true),
('Training Workshop', 'Professional development workshop for veterinarians', 'training', '/placeholder.svg?height=300&width=400', true);

-- Create a default admin user (password should be hashed in production)
INSERT INTO admin_users (username, email, password_hash, role, is_active) VALUES
('admin', 'admin@ukvc.in', '$2b$10$example_hash_here', 'super_admin', true)
ON CONFLICT (username) DO NOTHING;
