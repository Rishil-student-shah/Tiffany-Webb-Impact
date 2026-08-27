const fs = require('fs');
let content = fs.readFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', 'utf8');

// 1. Force massive padding left and right inline, bypassing ANY caching or container issues
content = content.replace(
  '<div class="container-narrow relative z-10 h-full">',
  '<div class="container-narrow relative z-10 h-full" style="padding-left: 5vw; padding-right: 5vw;">'
);

// 2. Add the gold gradient inline to the headline
content = content.replace(
  '<h3 class="media-headline">{headline}</h3>',
  '<h3 class="media-headline" style="background: linear-gradient(92deg, var(--color-gold), var(--color-coral)); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block;">{headline}</h3>'
);

fs.writeFileSync('D:/FREELANCE/TIFFANY WEB/Landing Page Work/tiffany-webb-astro/src/components/MediaBand.astro', content, 'utf8');
