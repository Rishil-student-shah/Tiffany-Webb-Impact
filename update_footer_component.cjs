const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Footer.astro', 'utf8');

// Replace declarations
const newDeclarations = `const quote = dbContent.quote || '"Every conversation is an opportunity to plant a seed of hope, strengthen a community, and inspire meaningful change."';
const valuesLine = dbContent.values_line || 'FAITH. FAMILY. COMMUNITY. PURPOSE. IMPACT.';
const endorsement = dbContent.endorsement || 'I\\'m also the founder of GambleFreeGear ?" purpose-driven apparel raising awareness of gambling harm.';
const col1Title = dbContent.col1_title || 'EXPLORE';
const col2Title = dbContent.col2_title || 'CONNECT';
const col3Title = dbContent.col3_title || 'CONTACT';
const col4Title = dbContent.col4_title || 'NEWSLETTER';
const contactEmail = dbContent.contact_email || 'booking@tiffanywebbimpact.com';
const contactLocation = dbContent.contact_location || 'Chicago, IL &middot; Available nationally';
const newsletterPlaceholder = dbContent.newsletter_placeholder || 'Email address';
const newsletterBtn = dbContent.newsletter_btn || 'JOIN';
const year = new Date().getFullYear();`;

content = content.replace(/const quote = [\s\S]*?const year = new Date\(\)\.getFullYear\(\);/, newDeclarations);

// Replace JSX text
content = content.replace(/>EXPLORE<\/h4>/g, '>{col1Title}</h4>');
content = content.replace(/>CONNECT<\/h4>/g, '>{col2Title}</h4>');
content = content.replace(/>CONTACT<\/h4>/g, '>{col3Title}</h4>');
content = content.replace(/>NEWSLETTER<\/h4>/g, '>{col4Title}</h4>');

// Fix contact email
content = content.replace(/>booking@tiffanywebbimpact\.com<\/a><\/p>/, ' href={`mailto:${contactEmail}`} class="footer-link">{contactEmail}</a></p>');
content = content.replace(/<a href="mailto:booking@tiffanywebbimpact\.com" class="footer-link">/, '<a'); 

// Fix contact location
content = content.replace(/>Chicago, IL &middot; Available nationally<\/p>/, ' set:html={contactLocation}></p>');

// Fix newsletter
content = content.replace(/placeholder="Email address"/, 'placeholder={newsletterPlaceholder}');
content = content.replace(/>JOIN<\/button>/, '>{newsletterBtn}</button>');


fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Footer.astro', content, 'utf8');
