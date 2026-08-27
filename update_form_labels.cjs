const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', 'utf8');

content = content.replace(/>Your Name \*/i, '>{content.label_name || "YOUR NAME"} *');
content = content.replace(/>Organization \*/i, '>{content.label_org || "ORGANIZATION"} *');
content = content.replace(/>Email Address \*/i, '>{content.label_email || "EMAIL ADDRESS"} *');
content = content.replace(/>Phone Number \*/i, '>{content.label_phone || "PHONE NUMBER"} *');
content = content.replace(/>Event Type \*/i, '>{content.label_type || "EVENT TYPE"} *');
content = content.replace(/>Event Date \*/i, '>{content.label_date || "EVENT DATE"} *');
content = content.replace(/>Location \(or "Virtual"\) \*/i, '>{content.label_location || "LOCATION (OR \\"VIRTUAL\\")"} *');
content = content.replace(/>Audience Size \*/i, '>{content.label_size || "AUDIENCE SIZE"} *');
content = content.replace(/>Tell us about your audience and goals \*/i, '>{content.label_details || "TELL US ABOUT YOUR AUDIENCE AND GOALS"} *');
content = content.replace(/Submit Request \w*;/, '{content.btn_submit || "Submit Request →"}');
content = content.replace(/Submit Request/g, '{content.btn_submit || "Submit Request →"}');

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/BookingSection.astro', content, 'utf8');
