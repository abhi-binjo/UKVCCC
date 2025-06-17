-- Insert veterinarians data
INSERT INTO veterinarians (name, father_name, dob, address, qualification, registration_number, registration_date, mobile_number, email, ivpr_year, ivpr_serial_no, remarks, expiry_date) VALUES
('Dr. Bhagwati Prasad Bhatt', 'Late Shri Ishwari Datt Bhatt', '08/09/46', 'G-1, Race Course, Dehradun, Uttarakhand, 248001', 'B.V.Sc & AH from , Agra University, 1968', 'UVC-01', '27.02.06', '9897340407', 'uttarakhandmanthan@gmail.com', '2006', '415342', 'Renew upto 26.02.2026', 'Feb-26'),
('Dr. Preeti Pant', 'Shri Umesh Chandra Pant', '12/12/1982', 'III/683, Jha Colony, Pantnagar, U.S. Nagar, Uttarakhand', 'B.V.Sc & AH from , Govind Ballabh Pant University of Agriculture and Technology Pantnagar, 2005', 'UVC-02', '03.03.06', '9756613520', 'drpreetipant@gmail.com', '2006', '2680548', 'Renew upto 02.03.2026', 'Mar-26'),
('Dr. Jagmohan Singh', 'Shri Bhagi Ram', '06/04/68', 'H.No.51, Cross No.08, Tapowan Enclave, nalapani Road, Sahastradhara Road, Dehradun', 'B.V.Sc & AH from   Govind Ballabh Pant University of Agriculture and Technology Pantnagar , 2005', 'UVC- 06', '27.02.06', '9412142970', 'aswaljagmohan7@gmail.com', '2006', '1083403', 'Renew  upto 25.02.2026', 'Feb-26'),
('Dr. Rajesh Kumar Sharma', 'Shri Ram Prasad Sharma', '15/03/75', 'Village Kandoli, Post Kandoli, Tehsil Pauri, District Pauri Garhwal, Uttarakhand', 'B.V.Sc & AH from Govind Ballabh Pant University of Agriculture and Technology Pantnagar, 1998', 'UVC-07', '15.04.06', '9412345678', 'drrajeshsharma@gmail.com', '2006', '1234567', 'Renew upto 14.04.2026', 'Apr-26'),
('Dr. Sunita Devi', 'Shri Mohan Lal', '22/07/80', 'H.No. 45, Sector 3, BHEL, Haridwar, Uttarakhand', 'B.V.Sc & AH from Govind Ballabh Pant University of Agriculture and Technology Pantnagar, 2003', 'UVC-08', '20.05.06', '9876543210', 'drsunitadevi@gmail.com', '2006', '7654321', 'Renew upto 19.05.2026', 'May-26');

-- Insert website content
INSERT INTO website_content (section, content_key, content_value, content_type, description) VALUES
('homepage', 'hero_title', 'Welcome to UKVC', 'text', 'Main hero section title'),
('homepage', 'hero_subtitle', 'Regulating and promoting veterinary practice excellence in Uttarakhand', 'text', 'Hero section subtitle'),
('homepage', 'president_message', 'Welcome to the Uttarakhand State Veterinary Council. We are committed to maintaining the highest standards of veterinary practice and education in our state. Our mission is to regulate the veterinary profession, ensure quality veterinary services, and promote animal welfare throughout Uttarakhand.', 'text', 'President message content'),
('contact', 'office_address', 'Uttarakhand State Veterinary Council, Veterinary Council Building, Dehradun, Uttarakhand - 248001, India', 'text', 'Office address'),
('contact', 'phone_office', '+91-135-XXXXXXX', 'text', 'Office phone number'),
('contact', 'phone_registrar', '+91-135-XXXXXXX', 'text', 'Registrar phone number'),
('contact', 'phone_helpline', '+91-XXXXXXXXXX', 'text', 'Helpline phone number'),
('contact', 'email_general', 'info@ukvc.in', 'text', 'General email address'),
('contact', 'email_registration', 'registration@ukvc.in', 'text', 'Registration email address'),
('contact', 'email_support', 'support@ukvc.in', 'text', 'Support email address'),
('about', 'mission', 'To regulate and maintain the highest standards of veterinary education and practice in Uttarakhand, ensuring quality animal healthcare services.', 'text', 'Mission statement'),
('about', 'vision', 'To be the leading regulatory body promoting excellence in veterinary profession and contributing to animal welfare and public health.', 'text', 'Vision statement'),
('about', 'values', 'Integrity, Excellence, Transparency, and Commitment to animal welfare and professional development of veterinarians.', 'text', 'Core values');

-- Insert committee members
INSERT INTO committee_members (name, position, department, display_order, is_active) VALUES
('Shri Pushkar Singh Dhami', 'Honorable Chief Minister', 'Uttarakhand', 1, true),
('Shri Saurabh Bahaguna', 'Honorable Minister', 'Animal Husbandry, Fisheries', 2, true),
('Dr. B.V.R.C Purushottam', 'Secretary', 'Animal Husbandry, Dairy And Fisheries', 3, true),
('Dr. Neeraj Singhal', 'Director', 'Animal Husbandry Department, Uttarakhand', 4, true),
('Dr. Kailash Uniyal', 'President', 'Uttarakhand State Veterinary Council', 5, true),
('Dr. Pralayankar Nath', 'Registrar', 'Uttarakhand State Veterinary Council', 6, true);

-- Insert sample downloads
INSERT INTO downloads (title, description, file_url, file_size, category, is_active) VALUES
('Indian Veterinary Council Act 1984', 'Complete text of the IVC Act 1984', '/downloads/ivc-act-1984.pdf', '2.5 MB', 'Acts & Rules', true),
('Uttarakhand Veterinary Rules', 'State-specific veterinary rules and regulations', '/downloads/uk-vet-rules.pdf', '1.8 MB', 'Acts & Rules', true),
('Registration Guidelines', 'Complete guidelines for veterinary registration', '/downloads/registration-guidelines.pdf', '1.2 MB', 'Acts & Rules', true),
('New Registration Form', 'Form for new veterinary registration', '/downloads/new-registration-form.pdf', '0.3 MB', 'Forms & Applications', true),
('License Renewal Form', 'Form for license renewal', '/downloads/renewal-form.pdf', '0.2 MB', 'Forms & Applications', true),
('NOC Application Form', 'No Objection Certificate application form', '/downloads/noc-form.pdf', '0.4 MB', 'Forms & Applications', true),
('Transfer Certificate Form', 'Form for transfer certificate', '/downloads/transfer-form.pdf', '0.3 MB', 'Forms & Applications', true),
('Annual Report 2023-24', 'Complete annual report for 2023-24', '/downloads/annual-report-2023-24.pdf', '5.2 MB', 'Annual Reports', true),
('Annual Report 2022-23', 'Complete annual report for 2022-23', '/downloads/annual-report-2022-23.pdf', '4.8 MB', 'Annual Reports', true),
('Annual Report 2021-22', 'Complete annual report for 2021-22', '/downloads/annual-report-2021-22.pdf', '4.5 MB', 'Annual Reports', true),
('Registration Fee Update Circular', 'Latest circular on fee updates', '/downloads/fee-update-circular.pdf', '0.8 MB', 'Circulars & Notices', true),
('Online Portal Launch Notice', 'Notice about new online portal', '/downloads/portal-launch-notice.pdf', '0.5 MB', 'Circulars & Notices', true),
('Continuing Education Guidelines', 'Guidelines for continuing education', '/downloads/ce-guidelines.pdf', '1.1 MB', 'Circulars & Notices', true),
('Committee Members List 2024', 'Current committee members list', '/downloads/committee-members-2024.pdf', '0.6 MB', 'Committee Information', true),
('Meeting Minutes - March 2024', 'Latest meeting minutes', '/downloads/meeting-minutes-mar-2024.pdf', '1.0 MB', 'Committee Information', true),
('Committee Constitution', 'Committee constitution and bylaws', '/downloads/committee-constitution.pdf', '0.8 MB', 'Committee Information', true),
('RTI Application Form', 'Right to Information application form', '/downloads/rti-form.pdf', '0.2 MB', 'RTI Information', true),
('RTI Guidelines', 'Complete RTI guidelines', '/downloads/rti-guidelines.pdf', '0.7 MB', 'RTI Information', true),
('Public Information Officer Details', 'Contact details of PIO', '/downloads/pio-details.pdf', '0.3 MB', 'RTI Information', true);

-- Insert sample gallery images
INSERT INTO gallery_images (title, description, image_url, category, is_active, display_order) VALUES
('UKVC Office Building', 'Main office building of Uttarakhand State Veterinary Council', '/placeholder.svg?height=300&width=400', 'office', true, 1),
('Council Meeting Hall', 'Main meeting hall for council sessions', '/placeholder.svg?height=300&width=400', 'office', true, 2),
('Registration Counter', 'Registration and inquiry counter', '/placeholder.svg?height=300&width=400', 'office', true, 3),
('Annual Conference 2023', 'Annual conference of veterinarians held in Dehradun', '/placeholder.svg?height=300&width=400', 'events', true, 1),
('Veterinary Workshop 2023', 'Professional development workshop', '/placeholder.svg?height=300&width=400', 'events', true, 2),
('State Level Seminar', 'State level veterinary seminar', '/placeholder.svg?height=300&width=400', 'events', true, 3),
('Registration Ceremony', 'New veterinarians receiving their registration certificates', '/placeholder.svg?height=300&width=400', 'ceremonies', true, 1),
('Award Ceremony', 'Excellence awards for outstanding veterinarians', '/placeholder.svg?height=300&width=400', 'ceremonies', true, 2),
('Oath Taking Ceremony', 'New members taking oath', '/placeholder.svg?height=300&width=400', 'ceremonies', true, 3),
('Veterinary Camp', 'Free veterinary camp organized in rural areas', '/placeholder.svg?height=300&width=400', 'camps', true, 1),
('Rural Outreach Program', 'Veterinary services in remote villages', '/placeholder.svg?height=300&width=400', 'camps', true, 2),
('Animal Health Camp', 'Community animal health camp', '/placeholder.svg?height=300&width=400', 'camps', true, 3),
('Training Workshop', 'Professional development workshop for veterinarians', '/placeholder.svg?height=300&width=400', 'training', true, 1),
('Skill Development Program', 'Advanced skill development training', '/placeholder.svg?height=300&width=400', 'training', true, 2),
('Continuing Education Session', 'Mandatory continuing education session', '/placeholder.svg?height=300&width=400', 'training', true, 3);

-- Insert sample notices
INSERT INTO notices (title, content, is_active) VALUES
('New Registration Process - Online Portal Launch', 'We are pleased to announce the launch of our new online registration portal. All new registrations and renewals can now be completed online. Please visit the Registration section for more details. The portal is available 24/7 for your convenience.', true),
('Annual General Meeting 2024', 'The Annual General Meeting of Uttarakhand State Veterinary Council will be held on March 15, 2024, at 10:00 AM at the Council premises. All registered members are requested to attend. Agenda will be shared separately.', true),
('Updated Fee Structure', 'The fee structure for various services has been updated effective from January 1, 2024. Please check the latest fee structure in the Services section before making any payments. Old fee structure is no longer valid.', true),
('Continuing Education Program', 'UKVC is organizing a continuing education program for all registered veterinarians. The program will be held quarterly. Details about the next session will be shared soon. Attendance is mandatory for license renewal.', true),
('Document Verification Drive', 'A special document verification drive will be conducted from February 1-15, 2024. All veterinarians with pending document verification are requested to visit the office during this period.', true);
