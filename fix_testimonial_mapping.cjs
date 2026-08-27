const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', 'utf8');

const oldMapping = `<p class="slide-quote">"{test.content_html || test.subtitle}"</p>
                    <div class="slide-author">
                      <span class="author-name">{test.title}</span>
                      {(test.subtitle || test.content_html) && (
                        <span class="author-role">Client</span>
                      )}
                    </div>`;

const newMapping = `<p class="slide-quote">"{test.content_html}"</p>
                    <div class="slide-author">
                      <span class="author-name">{test.title}</span>
                      {test.subtitle && (
                        <span class="author-role">{test.subtitle}</span>
                      )}
                    </div>`;

content = content.replace(oldMapping, newMapping);
fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/Proof.astro', content, 'utf8');
