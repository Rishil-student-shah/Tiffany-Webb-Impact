import { query } from './db.js';

// Fallback seed content matching database seed exactly
export const FALLBACK_DATA = {
  about: {
    page: {
      slug: 'about',
      name: 'About Tiffany',
      meta_title: 'About Tiffany Webb | Chicago Heart — Louisiana Soul',
      meta_description: 'Community Impact Strategist, Public Health Educator & Speaker with 15+ years and 4,000+ hours preventing gambling harm.',
      is_active: 1
    },
    content: {
      hero: {
        eyebrow: 'ABOUT TIFFANY WEBB',
        headline: 'Chicago Heart &mdash; <span class="italic-accent text-gold">Louisiana Soul.</span>',
        subtitle: 'Community Impact Strategist · Public Health Educator & Speaker',
        hero_image: '/images/tiffany_about_new.jpg',
        section_is_active: '1'
      },
      story: {
        eyebrow: 'THE STORY',
        headline: 'Where conviction meets the pavement.',
        pull_quote: 'When we rise, we rise together.',
        section_is_active: '1'
      },
      credentials: {
        eyebrow: 'CREDENTIALS & EXPERTISE',
        headline: 'Expertise that <span class="italic-accent text-gold">moves people.</span>',
        credentials_badge: 'TIFFANY WEBB, BBA, MHP',
        experience_stat_1: '15+ Years in Behavioral Health & Public Health',
        experience_stat_2: '4,000+ Hours of Frontline Outreach',
        section_is_active: '1'
      },
      how_she_works: {
        eyebrow: 'HOW SHE WORKS',
        headline: 'Strategy with people at the center.',
        body_text: 'Every keynote, training, and strategic advisory engagement is powered by her proprietary methodology.',
        cta_text: 'Explore The GEAR Method™ →',
        cta_url: '/services#gear',
        section_is_active: '1'
      },
      specialism: {
        section_anchor: 'specialism',
        eyebrow: 'THE SPECIALISM',
        headline: 'Where this <span class="italic-accent text-gold">work began.</span>',
        lead_paragraph: 'While public health often treats gambling as an afterthought, Tiffany has spent fifteen years addressing it as a primary public health crisis.',
        body_paragraphs: 'Research demonstrates that problem gambling disproportionately impacts communities of color and underserved populations. Tiffany\'s specialized practice combines rigorous public health education with deep cultural fluency to deliver interventions that resonate.',
        section_is_active: '1'
      },
      values: {
        eyebrow: 'CORE VALUES',
        headline: 'What she works from.',
        pull_quote: 'Every conversation is an opportunity to plant a seed of hope, strengthen a community, and inspire meaningful change.',
        section_is_active: '1'
      },
      affiliations: {
        eyebrow: 'PROFESSIONAL AFFILIATIONS',
        headline: 'Professional Affiliations & Memberships',
        section_is_active: '0'
      },
      gamblefreegear: {
        eyebrow: 'GAMBLEFREEGEAR — BY TIFFANY WEBB',
        headline: 'Break the silence — literally.',
        body_text: 'GambleFreeGear turns prevention into something people can wear and talk about. Apparel that starts the conversation before Tiffany ever walks into the room.',
        cta_text: 'Explore GambleFreeGear →',
        cta_url: 'https://inpowerimports.com',
        section_is_active: '1'
      },
      cta: {
        headline: "Let's start a conversation.",
        subtitle: 'Whether you are planning a conference, organizing a training, or designing a community strategy.',
        button_text: 'Invite Tiffany to Speak →',
        button_url: '/work-with-tiffany',
        section_is_active: '1'
      }
    },
    collections: {
      story_vignettes: [
        {
          title: 'The Foundation',
          subtitle: 'Roots & Culture',
          content_html: '[CONTENT-PENDING] Chicago-born and raised, with deep Louisiana family roots, Tiffany grew up between two worlds that shaped how she works. A city that taught resilience and directness, and a family culture that taught hospitality — meeting people where they are and feeding them before asking them anything.',
          sort_order: 1
        },
        {
          title: 'The Awakening',
          subtitle: 'A Hidden Crisis',
          content_html: '[CONTENT-PENDING] She came to public health through behavioral health. She stayed because she kept meeting families who had never been given language for what was happening to them: a father unable to explain where savings went, a student who believed sports betting was harmless gaming, a spouse carrying debt in silence.',
          sort_order: 2
        },
        {
          title: 'The Nature of Gambling Harm',
          subtitle: 'Breaking the Silence',
          content_html: '[CONTENT-PENDING] Gambling harm hides better than almost any other addiction. It carries no smell and shows up on no standard screen. By the time families name it, they have often carried it alone for years. Breaking that silence requires conversations that remove shame without minimizing reality.',
          sort_order: 3
        },
        {
          title: 'The Frontline Reality',
          subtitle: 'Fifteen Years on the Ground',
          content_html: '[CONTENT-PENDING] Over fifteen years and four thousand hours of frontline outreach, Tiffany has delivered prevention where it actually happens: in school gymnasiums, community clinics, church basements, and coalition halls across Illinois and nationwide.',
          sort_order: 4
        },
        {
          title: 'Culturally Rooted Prevention',
          subtitle: 'Meeting People Where They Are',
          content_html: "[CONTENT-PENDING] Standard public health campaigns often wait for people to seek help. Tiffany's work flips the dynamic: entering trusted community spaces, working through existing cultural leadership, and equipping everyday people with practical intervention tools.",
          sort_order: 5
        },
        {
          title: 'Empowerment & Enterprise',
          subtitle: 'GambleFreeGear',
          content_html: '[CONTENT-PENDING] Her work bridges behavioral science and community enterprise — including founding GambleFreeGear, an awareness apparel initiative that turns prevention into something people wear and talk about before crisis strikes.',
          sort_order: 6
        }
      ],
      expertise_areas: [
        {
          title: 'Behavioral Health & Addiction Prevention',
          subtitle: 'Clinical Depth',
          content_html: 'Clinical depth on co-occurring disorders, harm reduction, and stigma reduction across diverse populations.',
          sort_order: 1
        },
        {
          title: 'Youth & Digital Gambling Prevention',
          subtitle: 'Digital Fluency',
          content_html: 'Evidence-based programs on gaming-to-gambling crossover, sports-betting apps, and campus awareness campaigns.',
          sort_order: 2
        },
        {
          title: 'Community Outreach & Coalition Navigation',
          subtitle: 'Grassroots Trust',
          content_html: 'Building grassroots trust, engaging ROSC councils, and working alongside community leaders.',
          sort_order: 3
        },
        {
          title: 'Screening, Brief Intervention & Referral Systems',
          subtitle: 'Systems Integration',
          content_html: 'Integrating gambling screening into healthcare and social service intake workflows.',
          sort_order: 4
        }
      ],
      values_list: [
        {
          title: 'Faith',
          subtitle: 'Belief in Renewal',
          content_html: 'The unwavering belief that people can change, including those others have written off.',
          sort_order: 1
        },
        {
          title: 'Family',
          subtitle: 'Where Prevention Starts',
          content_html: 'Where prevention starts, and where harm is felt first and longest.',
          sort_order: 2
        },
        {
          title: 'Community',
          subtitle: 'Shared Resilience',
          content_html: 'Nobody recovers alone, and nobody prevents alone either.',
          sort_order: 3
        },
        {
          title: 'Purpose',
          subtitle: 'Practical Service',
          content_html: 'Turning lived understanding and professional rigor into practical service.',
          sort_order: 4
        },
        {
          title: 'Impact',
          subtitle: 'Lasting Change',
          content_html: 'Measured in conversations started and systems changed, not talks delivered.',
          sort_order: 5
        }
      ],
      affiliations_list: []
    }
  },

  services: {
    page: {
      slug: 'services',
      name: 'Services & Capabilities',
      meta_title: 'Services & Capabilities | Tiffany Webb',
      meta_description: 'Strategy with people at the center. Strategic Advisory, Program Architecture, Community Impact, and Speaking.',
      is_active: 1
    },
    content: {
      hero: {
        eyebrow: 'SERVICES & CAPABILITIES',
        headline: 'Strategy with <span class="italic-accent text-gold">people at the center.</span>',
        subtitle: 'From keynote stages to executive strategy, Tiffany Webb helps organizations bridge public health expertise, frontline reality, and actionable community impact.',
        primary_cta_text: 'Work with Tiffany →',
        primary_cta_url: '/work-with-tiffany',
        section_is_active: '1'
      },
      capabilities: {
        eyebrow: 'FOUR SIGNATURE CAPABILITIES',
        headline: 'How Tiffany Partners with Organizations',
        closing_quote: "I don't just tell you what to do next. I help you build how you get there.",
        section_is_active: '1'
      },
      gear: {
        section_anchor: 'gear',
        eyebrow: 'SIGNATURE METHODOLOGY',
        headline: 'The GEAR Method™',
        standfirst: 'From awareness to action. From ideas to impact.',
        description: 'The GEAR Method™ is a human-centered approach to helping organizations create strategies that connect with people, activate participation, and build meaningful pathways forward.',
        footer_flow: 'AWARENESS → CONNECTION → ACTION → IMPACT',
        section_is_active: '1'
      },
      speaking_teaser: {
        eyebrow: 'SPEAKING & FACILITATION',
        headline: 'Conversations that <span class="italic-accent text-gold">create change.</span>',
        body_text: 'Twenty topics organized across four signature tracks — built for clinicians, educators, students, and community coalitions.',
        cta_text: 'Explore All 20 Speaking Topics →',
        cta_url: '/services/speaking-topics',
        section_is_active: '1'
      },
      formats: {
        eyebrow: 'ENGAGEMENT FORMATS',
        headline: 'Ways we can work together.',
        long_tail_line: 'Same expertise, shaped to fit your event — from a main-stage keynote to a full-day training.',
        section_is_active: '1'
      },
      working_process: {
        eyebrow: 'THE PROCESS',
        headline: 'What working together looks like.',
        section_is_active: '1'
      },
      faqs: {
        eyebrow: 'FREQUENTLY ASKED QUESTIONS',
        headline: 'Everything you need to know.',
        section_is_active: '0'
      },
      cta: {
        headline: 'Bring Tiffany to your stage or team.',
        button_text: 'Invite Tiffany to Speak →',
        button_url: '/work-with-tiffany',
        section_is_active: '1'
      }
    },
    collections: {
      capabilities: [
        {
          item_slug: 'strategic-advisor',
          title: 'Strategic Advisor',
          subtitle: '01 // THINK',
          content_html: 'I challenge familiar thinking, uncover opportunities, and help leaders make clearer decisions around growth, engagement, innovation, and impact.<br/><br/><strong>Scope:</strong> Executive advisory, public health strategy, coalition alignment, prevention program roadmaps.',
          sort_order: 1
        },
        {
          item_slug: 'program-architect',
          title: 'Program Architect',
          subtitle: '02 // BUILD',
          content_html: 'I turn ideas and community needs into structured programs, initiatives, experiences, partnerships, and implementation pathways.<br/><br/><strong>Scope:</strong> Curriculum design, screening workflow integration, campaign architecture, stakeholder coordination.',
          sort_order: 2
        },
        {
          item_slug: 'community-impact-strategist',
          title: 'Community Impact Strategist',
          subtitle: '03 // CONNECT',
          content_html: 'Connects organizational goals with community realities, strengths, needs, and voices to create people-centered, outcome-focused strategies.<br/><br/><strong>Scope:</strong> Grassroots community engagement, health equity initiatives, ROSC council partnerships.',
          sort_order: 3
        },
        {
          item_slug: 'speaker-facilitator',
          title: 'Speaker & Facilitator',
          subtitle: '04 // MOVE',
          content_html: 'I create conversations and learning experiences that challenge assumptions, elevate thinking, encourage dialogue, and move audiences toward action.<br/><br/><strong>Scope:</strong> Keynotes, breakout sessions, clinical trainings, interactive workshops.',
          sort_order: 4
        }
      ],
      gear_steps: [
        {
          title: 'G — Generate',
          subtitle: 'Build Awareness & Understanding',
          content_html: 'Clarify the challenge, understand the audience, and make the issue visible and relevant before trying to solve it.',
          sort_order: 1
        },
        {
          title: 'E — Engage',
          subtitle: 'Build Trust & Connection',
          content_html: 'Listen, strengthen relationships, and create opportunities for meaningful participation across diverse community groups.',
          sort_order: 2
        },
        {
          title: 'A — Activate',
          subtitle: 'Move Ideas into Action',
          content_html: 'Turn insight into strategies, programs, experiences, partnerships, and practical next steps that stick.',
          sort_order: 3
        },
        {
          title: 'R — Resource',
          subtitle: 'Build the Path Forward',
          content_html: 'Connect people and organizations with information, relationships, services, tools, and opportunities for sustained impact.',
          sort_order: 4
        }
      ],
      engagement_formats: [
        {
          title: 'Keynote Address',
          subtitle: '45–60 Minutes · Main Stage',
          content_html: 'High-energy, transformative keynote designed to reframe gambling prevention, shift perspectives, and inspire collective action across large audiences.',
          sort_order: 1
        },
        {
          title: 'Conference Session',
          subtitle: '60–90 Minutes · Breakout',
          content_html: 'Focused deep-dive tailored to specific conference tracks with evidence-based frameworks and interactive audience Q&A.',
          sort_order: 2
        },
        {
          title: 'Panel & Roundtable',
          subtitle: '60–75 Minutes · Panelist or Moderator',
          content_html: 'Dynamic panelist or skilled moderator bringing frontline public health specificity, equity lens, and collaborative dialogue to complex issues.',
          sort_order: 3
        },
        {
          title: 'School & University Program',
          subtitle: 'Half-Day / Full-Day · Campus-Wide',
          content_html: 'Two-part structured delivery: student-focused awareness session addressing sports betting and app mechanics, followed by faculty and counselor workshop.',
          sort_order: 4
        },
        {
          title: 'Clinical & Frontline Workshop',
          subtitle: 'Half-Day to Multi-Day · Intensive',
          content_html: 'Hands-on training for healthcare providers, counselors, and ROSC staff covering screening protocols, brief intervention, and referral pathways.',
          sort_order: 5
        },
        {
          title: 'Custom Strategy & Advisory',
          subtitle: 'Multi-Session · Bespoke',
          content_html: 'Tailored consulting series, curriculum development, coalition strategic planning, or community campaign architecture.',
          sort_order: 6
        }
      ],
      working_steps: [
        {
          title: '01 // Pre-Event Consultation',
          subtitle: 'Deep Listening',
          content_html: 'We begin with an alignment conversation to understand your audience, organizational goals, sensitive topics, and success metrics.',
          sort_order: 1
        },
        {
          title: '02 // Content Built for Your Room',
          subtitle: 'Custom Tailoring',
          content_html: 'Sessions are never generic. Every presentation, case study, and interactive prompt is customized specifically for your attendees.',
          sort_order: 2
        },
        {
          title: '03 // Promotional & Production Assets',
          subtitle: 'Seamless Coordination',
          content_html: 'Approved headshots, high-impact session abstracts, speaker bio kits, and promotional copy provided ready to use for your marketing team.',
          sort_order: 3
        },
        {
          title: '04 // Post-Event Resources & Debrief',
          subtitle: 'Lasting Action',
          content_html: 'Attendees receive actionable toolkits and screening templates. A post-event debrief ensures long-term follow-through and measurable impact.',
          sort_order: 4
        }
      ],
      faqs: []
    }
  },

  'speaking-topics': {
    page: {
      slug: 'speaking-topics',
      name: 'Speaking Topics',
      meta_title: '20 Speaking Topics | Tiffany Webb',
      meta_description: 'Explore 20 signature speaking topics across 4 tracks: Prevention & Awareness, Treatment & Recovery, Family & Community, and Creative Engagement.',
      is_active: 1
    },
    content: {
      hero: {
        eyebrow: 'SPEAKING PORTFOLIO',
        headline: 'Conversations that <span class="italic-accent text-gold">create change.</span>',
        subtitle: 'Twenty topics across four tracks — practical enough to use on Monday, human enough that the room stays with her.',
        section_is_active: '1'
      },
      filter_bar: {
        eyebrow: 'TOPIC EXPLORER',
        headline: 'Filter by Track & Target Audience',
        section_is_active: '1'
      },
      grid: {
        eyebrow: 'SIGNATURE TOPICS',
        headline: 'All 20 Speaking Topics',
        section_is_active: '1'
      },
      cta: {
        headline: 'Need a customized topic for your conference or team?',
        button_text: 'Request a Custom Session →',
        button_url: '/work-with-tiffany',
        section_is_active: '1'
      }
    },
    collections: {
      topics_list: [
        // Track 1: Prevention & Awareness (5 Topics) - Emerald #0E6B54
        {
          item_slug: 'gambling-prevention-and-community-awareness',
          title: 'Gambling Prevention and Community Awareness',
          subtitle: 'Track: Prevention & Awareness',
          badge: '#0E6B54',
          category: 'Prevention & Awareness',
          audience: 'General Public, Community Organizations, Prevention Specialists',
          link_url: '/work-with-tiffany?topic=Gambling+Prevention+and+Community+Awareness',
          content_html: '<strong>Audience:</strong> General public, community organizations, prevention specialists<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Introduction to how gambling harm develops, risk factors, and proactive steps before crisis. Ready-to-use community intervention tools.',
          sort_order: 1
        },
        {
          item_slug: 'dont-bet-on-your-future-youth-focus',
          title: "Don't Bet on Your Future (Youth Focus)",
          subtitle: 'Track: Prevention & Awareness',
          badge: '#0E6B54',
          category: 'Prevention & Awareness',
          audience: 'Youth & Students, Educators, Parents',
          link_url: '/work-with-tiffany?topic=Don%27t+Bet+on+Your+Future+%28Youth+Focus%29',
          content_html: "<strong>Audience:</strong> Students, youth groups, educators, parents<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Tackles sports-betting apps, gaming-to-gambling crossover, and peer dynamics without lecturing. Meets youth where they are.",
          sort_order: 2
        },
        {
          item_slug: 'problem-gambling-awareness-month',
          title: 'Problem Gambling Awareness Month (March)',
          subtitle: 'Track: Prevention & Awareness',
          badge: '#0E6B54',
          category: 'Prevention & Awareness',
          audience: 'General Public, Policy & Government, Community Stakeholders',
          link_url: '/work-with-tiffany?topic=Problem+Gambling+Awareness+Month+%28March%29',
          content_html: '<strong>Audience:</strong> General public, community stakeholders, advocacy groups<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Ready-to-deliver signature session for PGAM campaigns and community awareness moments. Shifts community perspective.',
          sort_order: 3
        },
        {
          item_slug: 'national-screening-day',
          title: 'National Screening Day',
          subtitle: 'Track: Prevention & Awareness',
          badge: '#0E6B54',
          category: 'Prevention & Awareness',
          audience: 'Clinicians & Providers, Prevention Coalitions, Public Health',
          link_url: '/work-with-tiffany?topic=National+Screening+Day',
          content_html: '<strong>Audience:</strong> Health centers, prevention coalitions, public health<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> How screening works and how to integrate it into health settings without stigmatizing patients. Practical assessment tools.',
          sort_order: 4
        },
        {
          item_slug: 'outreach-engaging-elected-officials-and-resolutions',
          title: 'Outreach: Engaging Elected Officials & Resolutions',
          subtitle: 'Track: Prevention & Awareness',
          badge: '#0E6B54',
          category: 'Prevention & Awareness',
          audience: 'Policy & Government, Advocates, Civic Leaders',
          link_url: '/work-with-tiffany?topic=Outreach%3A+Engaging+Elected+Officials+%26+Resolutions',
          content_html: '<strong>Audience:</strong> Policy makers, government officials, advocates<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Moving prevention into policy attention, drafting resolutions, and engaging civic leaders to secure community resources.',
          sort_order: 5
        },

        // Track 2: Treatment & Recovery (8 Topics) - Gold #C8A24C
        {
          item_slug: 'gambling-co-occurring-disorders-sud-workplace',
          title: 'Gambling & Co-Occurring Disorders: SUD & Workplace',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, HR & Employers, Behavioral Health',
          link_url: '/work-with-tiffany?topic=Gambling+%26+Co-Occurring+Disorders%3A+SUD+%26+Workplace',
          content_html: '<strong>Audience:</strong> Behavioral health professionals, HR, EAPs<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> The overlap of gambling with substance use and how it presents in workplace/EAP settings. Early identification protocols.',
          sort_order: 6
        },
        {
          item_slug: 'the-changing-face-of-gambling-addiction',
          title: 'The Changing Face of Gambling Addiction',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, Community Leaders, Advocates',
          link_url: '/work-with-tiffany?topic=The+Changing+Face+of+Gambling+Addiction',
          content_html: '<strong>Audience:</strong> Treatment providers, community leaders, advocates<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> How mobile apps and digital sports betting transformed addiction demographics and speed of onset across demographics.',
          sort_order: 7
        },
        {
          item_slug: 'gambling-and-suicide',
          title: 'Gambling and Suicide',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, Crisis Intervention Workers',
          link_url: '/work-with-tiffany?topic=Gambling+and+Suicide',
          content_html: '<strong>Audience:</strong> Mental health clinicians, crisis intervention workers<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Clinically grounded guidance on the high co-occurring suicide risks of gambling disorder and critical crisis intervention points.',
          sort_order: 8
        },
        {
          item_slug: 'resources-self-exclusion',
          title: 'Resources: Self-Exclusion',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, Prevention Specialists, Agencies',
          link_url: '/work-with-tiffany?topic=Resources%3A+Self-Exclusion',
          content_html: '<strong>Audience:</strong> Treatment providers, prevention specialists, agencies<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> How self-exclusion programs work, their limitations, and how to integrate them into wider recovery planning and family support.',
          sort_order: 9
        },
        {
          item_slug: 'harm-reduction-strategies-for-problem-gambling',
          title: 'Harm Reduction Strategies for Problem Gambling',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, Harm Reduction Advocates',
          link_url: '/work-with-tiffany?topic=Harm+Reduction+Strategies+for+Problem+Gambling',
          content_html: '<strong>Audience:</strong> Treatment providers, harm reduction advocates<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Meeting individuals where they are who are not yet ready for total abstinence. Pragmatic steps to reduce immediate financial and emotional harm.',
          sort_order: 10
        },
        {
          item_slug: 'motivational-interviewing-tools',
          title: 'Motivational Interviewing Tools',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, Counselors, Peer Specialists',
          link_url: '/work-with-tiffany?topic=Motivational+Interviewing+Tools',
          content_html: '<strong>Audience:</strong> Counselors, peer specialists, social workers<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Hands-on skills practice applying motivational interviewing techniques to gambling disclosures and resistance.',
          sort_order: 11
        },
        {
          item_slug: 'screening-and-prevention-in-healthcare',
          title: 'Screening and Prevention in Healthcare',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, Primary Care, Social Services',
          link_url: '/work-with-tiffany?topic=Screening+and+Prevention+in+Healthcare',
          content_html: '<strong>Audience:</strong> Primary care providers, social service agencies<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Practical toolkits for embedding gambling screening into routine health assessments and electronic medical records.',
          sort_order: 12
        },
        {
          item_slug: 'guidelines-for-gambling-treatment-and-linkage',
          title: 'Guidelines for Gambling Treatment & Linkage',
          subtitle: 'Track: Treatment & Recovery',
          badge: '#C8A24C',
          category: 'Treatment & Recovery',
          audience: 'Clinicians & Providers, Behavioral Health Staff, Recovery Coaches',
          link_url: '/work-with-tiffany?topic=Guidelines+for+Gambling+Treatment+%26+Linkage',
          content_html: '<strong>Audience:</strong> Behavioral health staff, recovery coaches<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Building warm-handoff referral pathways that patients actually follow through on. Overcoming stigma and systemic barriers.',
          sort_order: 13
        },

        // Track 3: Family & Community (4 Topics) - Coral #C15427
        {
          item_slug: 'gambling-significant-others-and-impact',
          title: 'Gambling, Significant Others, and Impact',
          subtitle: 'Track: Family & Community',
          badge: '#C15427',
          category: 'Family & Community',
          audience: 'Families, Peer Support Groups, Counselors',
          link_url: '/work-with-tiffany?topic=Gambling%2C+Significant+Others%2C+and+Impact',
          content_html: '<strong>Audience:</strong> Families, peer support groups, counselors<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Addressing the financial, emotional, and relational trauma experienced by partners and immediate loved ones.',
          sort_order: 14
        },
        {
          item_slug: 'the-link-between-gambling-domestic-violence-and-trauma',
          title: 'The Link Between Gambling, Domestic Violence & Trauma',
          subtitle: 'Track: Family & Community',
          badge: '#C15427',
          category: 'Family & Community',
          audience: 'Families, Clinicians & Providers, DV Advocates, Social Workers',
          link_url: '/work-with-tiffany?topic=The+Link+Between+Gambling%2C+Domestic+Violence+%26+Trauma',
          content_html: '<strong>Audience:</strong> DV advocates, trauma specialists, social workers<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Evidence-informed exploration of intimate partner violence, chronic stress, and trauma intersections in problem gambling families.',
          sort_order: 15
        },
        {
          item_slug: 'families-living-with-problem-gambling-coping-and-help',
          title: 'Families Living with Problem Gambling: Coping & Help',
          subtitle: 'Track: Family & Community',
          badge: '#C15427',
          category: 'Family & Community',
          audience: 'Families, Therapists, Support Networks',
          link_url: '/work-with-tiffany?topic=Families+Living+with+Problem+Gambling%3A+Coping+%26+Help',
          content_html: '<strong>Audience:</strong> Family members, therapists, support networks<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Practical guidance: asset protection, boundary setting, and initiating healthy, constructive help-seeking conversations.',
          sort_order: 16
        },
        {
          item_slug: 'gambling-harm-in-family-systems',
          title: 'Gambling Harm in Family Systems',
          subtitle: 'Track: Family & Community',
          badge: '#C15427',
          category: 'Family & Community',
          audience: 'Families, Clinicians & Providers, Marriage & Family Therapists',
          link_url: '/work-with-tiffany?topic=Gambling+Harm+in+Family+Systems',
          content_html: '<strong>Audience:</strong> Marriage & family therapists, social workers<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Systems-level look at how addiction alters family communication, financial stability, and long-term child development.',
          sort_order: 17
        },

        // Track 4: Creative Engagement (3 Topics) - Deep Violet #4A3B69
        {
          item_slug: 'promotion-youth-art-competition',
          title: 'Promotion: Youth Art Competition',
          subtitle: 'Track: Creative Engagement',
          badge: '#4A3B69',
          category: 'Creative Engagement',
          audience: 'Youth & Students, Schools, Art Programs, Youth Organizations',
          link_url: '/work-with-tiffany?topic=Promotion%3A+Youth+Art+Competition',
          content_html: '<strong>Audience:</strong> Schools, art programs, youth organizations<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Using creative arts contests to engage youth in prevention without standard lectures. Fostering authentic youth voice.',
          sort_order: 18
        },
        {
          item_slug: 'promotion-responsible-gifting',
          title: 'Promotion: Responsible Gifting',
          subtitle: 'Track: Creative Engagement',
          badge: '#4A3B69',
          category: 'Creative Engagement',
          audience: 'Families, General Public, Parents, Educators, Retailers',
          link_url: '/work-with-tiffany?topic=Promotion%3A+Responsible+Gifting',
          content_html: '<strong>Audience:</strong> Parents, educators, community retailers<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Non-judgmental education on preventing lottery tickets and scratch-offs as gifts to minors during holiday seasons.',
          sort_order: 19
        },
        {
          item_slug: 'gambling-prevention-and-rosc-council-engagement',
          title: 'Gambling Prevention & ROSC Council Engagement',
          subtitle: 'Track: Creative Engagement',
          badge: '#4A3B69',
          category: 'Creative Engagement',
          audience: 'Policy & Government, Clinicians & Providers, ROSC Members, Coalitions',
          link_url: '/work-with-tiffany?topic=Gambling+Prevention+%26+ROSC+Council+Engagement',
          content_html: '<strong>Audience:</strong> ROSC members, recovery coalition directors<br/><strong>Session Length:</strong> [CONTENT-PENDING]<br/><strong>Summary:</strong> Integrating gambling prevention directly into Recovery Oriented Systems of Care. Expanding coalition capacity.',
          sort_order: 20
        }
      ]
    }
  },

  impact: {
    page: {
      slug: 'impact',
      name: 'Community Impact',
      meta_title: 'Community Impact | Tiffany Webb',
      meta_description: 'Fifteen years of prevention work, measured in conversations started, systems changed, and communities that stopped waiting for permission to talk about this.',
      is_active: 1
    },
    content: {
      hero: {
        eyebrow: 'COMMUNITY IMPACT',
        headline: 'Where the work <span class="italic-accent text-gold">has taken me.</span>',
        subtitle: 'Fifteen years of prevention work, measured in conversations started, systems changed, and communities that stopped waiting for permission to talk about this.',
        section_is_active: '1'
      },
      stats: {
        eyebrow: 'BY THE NUMBERS',
        headline: 'Fifteen Years of Impact',
        stat_1_num: '15+',
        stat_1_label: 'Years in Behavioral & Public Health',
        stat_2_num: '4,000+',
        stat_2_label: 'Hours of Frontline Outreach',
        stat_3_num: '20',
        stat_3_label: 'Signature Speaking Topics',
        stat_4_num: '100%',
        stat_4_label: 'Community Centered',
        section_is_active: '1'
      },
      upcoming: {
        eyebrow: 'UPCOMING ENGAGEMENTS',
        headline: 'Where Tiffany is Speaking Next',
        empty_message: 'Next speaking dates announced soon. In the meantime, get in touch to bring Tiffany to your event.',
        cta_text: 'Invite Tiffany to Speak →',
        cta_url: '/work-with-tiffany',
        section_is_active: '1'
      },
      past: {
        eyebrow: 'PAST ENGAGEMENTS',
        headline: 'Keynotes, Trainings & Summits',
        empty_message: 'Past engagement archive is currently being updated with recent keynotes and summits.',
        section_is_active: '1'
      },
      stories: {
        eyebrow: 'OUTCOME STORIES',
        headline: 'Frontline Change in Action',
        section_is_active: '1'
      },
      practice: {
        eyebrow: 'PUBLIC HEALTH PRACTICE',
        headline: 'Prevention that meets people where they are.',
        body_text: 'Tiffany has spent fifteen years working in school gyms, clinic waiting rooms, church basements, and coalition halls. Her work establishes prevention in spaces standard campaigns never reach.',
        link_text: 'Read more about her specialism →',
        link_url: '/about#specialism',
        section_is_active: '1'
      },
      testimonials: {
        eyebrow: 'TESTIMONIALS & FEEDBACK',
        headline: 'What Partners & Attendees Say',
        empty_message: 'Partner feedback and attendee testimonials are currently being curated.',
        section_is_active: '0'
      },
      cta: {
        headline: 'Bring this work to your community.',
        subtitle: 'Whether you are planning a conference, organizing a clinical training, or designing a community prevention strategy.',
        button_text: 'Invite Tiffany to Speak →',
        button_url: '/work-with-tiffany',
        section_is_active: '1'
      }
    },
    collections: {
      upcoming_engagements: [],
      past_engagements: [],
      outcome_stories: [],
      testimonials: []
    }
  },

  media: {
    page: {
      slug: 'media',
      name: 'Media & Press',
      meta_title: 'Media & Press Kit | Tiffany Webb',
      meta_description: 'Official press kits, approved bios in 3 lengths, introduction scripts, talking points, and interview requests for Tiffany Webb.',
      is_active: 1
    },
    content: {
      hero: {
        eyebrow: 'MEDIA & PRESS',
        headline: 'Ready for the room &mdash; <span class="italic-accent text-gold">and the story.</span>',
        subtitle: 'Everything event organizers, journalists, and podcast hosts need to feature, interview, or introduce Tiffany Webb.',
        section_is_active: '1'
      },
      downloads: {
        eyebrow: 'OFFICIAL ASSETS',
        headline: 'Download Press & Speaker Kits',
        section_is_active: '1'
      },
      bios: {
        eyebrow: 'APPROVED BIOGRAPHIES',
        headline: 'Bios in Three Lengths',
        subtext: 'Approved for event programs, introductions, podcast show notes, and editorial features. Click to copy directly to your clipboard.',
        section_is_active: '1'
      },
      intro_script: {
        eyebrow: 'STAGE INTRODUCTION',
        headline: 'Official Introduction Script',
        subtext: 'Please read this introduction verbatim when introducing Tiffany to the stage or podcast.',
        script_text: "[CONTENT-PENDING] Our next speaker has spent more than fifteen years and four thousand hours doing prevention work in the places it's hardest to do — schools, clinics, and community rooms across Illinois. She's a public-health educator, a Community Impact Strategist, and the founder of GambleFreeGear. She believes prevention begins with a conversation, and she's here to start one with us. Please welcome Tiffany Webb.",
        section_is_active: '1'
      },
      talking_points: {
        eyebrow: 'AREAS OF COMMENTARY',
        headline: 'What She Can Speak To',
        subtext: 'Tiffany provides authoritative, culturally fluent commentary on modern public health and behavioral health topics.',
        section_is_active: '1'
      },
      cta: {
        headline: 'Book an Interview or Podcast Feature',
        subtitle: 'For broadcast media, podcast bookings, press quotes, or conference keynotes.',
        button_text: 'Submit Media Request →',
        button_url: '/work-with-tiffany?type=Media',
        section_is_active: '1'
      }
    },
    collections: {
      download_assets: [
        {
          title: 'Speaker One-Sheet',
          subtitle: 'For Event Organizers',
          content_html: 'A single-page overview of Tiffany\'s signature keynotes, core topics, and professional credentials. Perfect for committee review.',
          file_url: '/downloads/Tiffany_Webb_Speaker_One_Sheet.pdf',
          file_type: 'PDF',
          file_size: 'Available upon request',
          sort_order: 1
        },
        {
          title: 'Media Kit',
          subtitle: 'For Journalists & Press',
          content_html: 'Official approved high-resolution headshots (print & digital), bio files, and brand standards for features and interviews.',
          file_url: '/downloads/Tiffany_Webb_Media_Kit.zip',
          file_type: 'ZIP',
          file_size: 'Available upon request',
          sort_order: 2
        },
        {
          title: 'Capability Kit',
          subtitle: 'For Healthcare & Coalitions',
          content_html: 'In-depth prospectus of executive consulting, clinical training modules, and community campaign architecture.',
          file_url: '/downloads/Tiffany_Webb_Capability_Kit.pdf',
          file_type: 'PDF',
          file_size: 'Available upon request',
          sort_order: 3
        }
      ],
      bios_list: [
        {
          title: 'Short Bio',
          subtitle: '≈40 words · Program blurbs & short panels',
          content_html: '[CONTENT-PENDING] Tiffany Webb is a public-health educator and Community Impact Strategist with 15+ years and 4,000+ hours preventing gambling harm. She helps conferences, schools, and health systems turn hard conversations into action — with the cultural fluency to reach the people other programs miss.',
          word_count: '40 words',
          sort_order: 1
        },
        {
          title: 'Medium Bio',
          subtitle: '≈90 words · Conference programs & speaker introductions',
          content_html: "[CONTENT-PENDING] Tiffany Webb, BBA, MHP, is a Chicago-born public-health educator, gambling-prevention leader, and Community Impact Strategist with deep Louisiana roots. Over 15+ years and 4,000+ hours of frontline outreach, she has built coalitions, trained professionals, and led community screenings across Illinois — partnering with health systems, schools, government, and recovery organizations. A dynamic keynote speaker, panelist, and workshop facilitator, she makes difficult topics approachable and leaves organizations with practical tools. She is also the founder of GambleFreeGear, an awareness apparel brand built to 'Break the Silence' on gambling addiction.",
          word_count: '90 words',
          sort_order: 2
        },
        {
          title: 'Long Bio',
          subtitle: '≈150 words · Full-length bio for feature articles & keynotes',
          content_html: "[CONTENT-PENDING] Tiffany Webb, BBA, MHP, is a public-health educator, gambling-prevention leader, and Community Impact Strategist based in the Chicago area. Chicago-born and raised with deep Louisiana family roots, she blends behavioral-health expertise, bold community outreach, and entrepreneurial drive into a singular mission: no one should face gambling harm in silence. Across 15+ years and 4,000+ hours of prevention outreach, Tiffany has led community screenings, built coalitions, trained clinicians and frontline workers, and partnered with hospitals, schools, universities, government agencies, faith communities, and recovery organizations. As a keynote speaker, panelist, and workshop facilitator, she is known for making difficult topics approachable, leading with both heart and strategy, and equipping communities with practical tools. She is also the founder of GambleFreeGear, an awareness apparel brand on a mission to 'Break the Silence.'",
          word_count: '150 words',
          sort_order: 3
        }
      ],
      talking_points_list: [
        {
          title: 'The hidden epidemic of sports-betting apps and gambling mechanics in youth gaming.',
          sort_order: 1
        },
        {
          title: 'Why standard prevention campaigns fail underserved communities and what culturally rooted outreach requires.',
          sort_order: 2
        },
        {
          title: 'The co-occurring overlap between problem gambling, substance use disorders, and suicide risk.',
          sort_order: 3
        },
        {
          title: 'Practical harm-reduction strategies and integrating screening into routine clinical workflows.',
          sort_order: 4
        },
        {
          title: 'The journey of building GambleFreeGear and turning personal conviction into visible community action.',
          sort_order: 5
        }
      ]
    }
  },

  'work-with-tiffany': {
    page: {
      slug: 'work-with-tiffany',
      name: 'Work With Tiffany',
      meta_title: 'Work With Tiffany | Book Speaking, Training & Advisory',
      meta_description: 'Bring Tiffany Webb to your stage, conference, clinic, or team. Submit an inquiry for keynotes, workshops, and strategic consulting.',
      is_active: 1
    },
    content: {
      hero: {
        eyebrow: "LET'S CREATE IMPACT TOGETHER",
        headline: 'Bring Tiffany <span class="italic-accent text-gold">to your conversation.</span>',
        subtitle: 'Tell us about your event, audience, and goals. Tiffany personally reviews every inquiry and responds within two business days.',
        section_is_active: '1'
      },
      booking_form: {
        eyebrow: 'INQUIRY FORM',
        headline: 'Send your request.',
        submit_btn_text: 'Submit Inquiry →',
        section_is_active: '1'
      },
      next_steps: {
        eyebrow: 'THE PROCESS',
        headline: 'What happens next.',
        section_is_active: '1'
      },
      faqs: {
        eyebrow: 'FREQUENTLY ASKED QUESTIONS',
        headline: 'Common Questions',
        section_is_active: '0'
      },
      alt_contact: {
        eyebrow: 'DIRECT INQUIRIES',
        headline: 'Prefer direct contact?',
        email: 'booking@tiffanywebb.com',
        note: 'For direct correspondence, media inquiries, or urgent requests, email us directly at booking@tiffanywebb.com.',
        location: 'Based in Chicago Area, Illinois · Serving Nationwide.',
        section_is_active: '1'
      }
    },
    collections: {
      booking_next_steps: [
        {
          title: '01 Review',
          subtitle: 'Within 48 Hours',
          content_html: 'Tiffany personally evaluates fit, audience alignment, and schedule availability for your requested date.',
          sort_order: 1
        },
        {
          title: '02 Discovery',
          subtitle: '15-Minute Call',
          content_html: 'A short alignment conversation to understand your room dynamics, core objectives, and organizational context.',
          sort_order: 2
        },
        {
          title: '03 Proposal',
          subtitle: 'Clear Terms',
          content_html: 'Clear written scope, logistics, tailored session outline, and engagement agreement.',
          sort_order: 3
        },
        {
          title: '04 Delivery',
          subtitle: 'Lasting Impact',
          content_html: 'A tailored, high-impact session that equips your room with practical tools and immediate next steps.',
          sort_order: 4
        }
      ],
      faqs: []
    }
  },

  insights: {
    page: {
      slug: 'insights',
      name: 'Insights & Articles',
      meta_title: 'Insights & Articles | Tiffany Webb',
      meta_description: 'Notes from the frontline of prevention — on gambling harm, public health, and the conversations that change communities.',
      is_active: 1
    },
    content: {
      hero: {
        eyebrow: 'INSIGHTS & ARTICLES',
        headline: 'Thinking <span class="italic-accent text-gold">out loud.</span>',
        subtitle: 'Notes from the frontline of prevention — on gambling harm, public health, and the conversations that change communities.',
        section_is_active: '1'
      },
      grid: {
        eyebrow: 'ARTICLES & ESSAYS',
        headline: 'From the Frontline',
        section_is_active: '1'
      }
    },
    collections: {
      articles: [
        {
          item_slug: 'what-gambling-prevention-actually-looks-like',
          title: 'What Gambling Prevention Actually Looks Like',
          subtitle: 'Prevention · 5 min read',
          category: 'Prevention',
          badge: '5 min read',
          date: 'August 2026',
          excerpt: "Most prevention campaigns are designed for people who are already looking. Here's what reaching everyone else requires.",
          link_url: '/insights/what-gambling-prevention-actually-looks-like',
          image_url: '/images/insights-1.jpg',
          content_html: '<p class="lead">Most prevention campaigns are designed for people who are already looking. Here\'s what reaching everyone else requires.</p><p>When we talk about public health education, there is often a tacit assumption that people will seek information when they need it. But gambling harm hides in silence. It carries no smell, shows up on no standard screen, and rarely presents as an obvious crisis until savings are depleted, relationships are fractured, or legal jeopardy arrives.</p><blockquote class="story-pull-quote text-gold">&ldquo;Real prevention doesn\'t wait in a clinic waiting room. It shows up where people live, work, and congregate before crisis strikes.&rdquo;</blockquote><p>Over fifteen years of frontline outreach in community clinics, high school gymnasiums, and church basements, we\'ve learned that effective prevention requires three structural shifts:</p><ul><li><strong>Normalize the conversation:</strong> Remove shame and stigma by treating problem gambling as a preventable public health condition rather than an individual moral failing.</li><li><strong>Embed screening into routine touchpoints:</strong> Train primary care clinicians, EAP counselors, and social workers to ask two simple screening questions during standard intake.</li><li><strong>Cultivate trusted cultural messengers:</strong> Work directly through community leaders and grassroots coalitions rather than distant top-down ad campaigns.</li></ul><p>When communities are equipped with the right language and practical tools, the silence begins to break — and that is where lasting recovery and prevention start.</p>',
          sort_order: 1
        },
        {
          item_slug: 'dont-bet-on-your-future-why-youth-prevention-starts-with-a-conversation',
          title: "Don't Bet on Your Future: Why Youth Prevention Starts With a Conversation",
          subtitle: 'Youth Prevention · 5 min read',
          category: 'Youth Prevention',
          badge: '5 min read',
          date: 'July 2026',
          excerpt: "Sports betting reached young people faster than prevention did. Here's how schools and parents can catch up.",
          link_url: '/insights/dont-bet-on-your-future-why-youth-prevention-starts-with-a-conversation',
          image_url: '/images/insights-2.jpg',
          content_html: '<p class="lead">Sports betting reached young people faster than prevention did. Here\'s how schools and parents can catch up.</p><p>In less than five years, sports-betting apps and micro-betting mechanics have transformed the digital landscape for youth and young adults. Coupled with loot boxes and simulated gambling in video games, the line between harmless entertainment and addictive financial wagering has blurred beyond recognition.</p><blockquote class="story-pull-quote text-gold">&ldquo;If we only lecture students about statistics and risks, they tune out. We have to show them how algorithms and odds are designed to keep them playing.&rdquo;</blockquote><p>In our school-based sessions, we avoid scare tactics. Instead, we break down:</p><ul><li><strong>The psychology of near-misses:</strong> How game mechanics and betting apps manipulate dopamine responses.</li><li><strong>The illusion of control:</strong> Why sports knowledge does not protect against mathematical house edges.</li><li><strong>Peer pressure and social proof:</strong> Helping students recognize when betting talk among friends is masking serious debt or emotional strain.</li></ul><p>By treating youth with respect and giving them critical media literacy skills, we empower them to make intentional decisions and look out for their peers before debt and anxiety take over.</p>',
          sort_order: 2
        },
        {
          item_slug: 'the-communities-prevention-reaches-last',
          title: 'The Communities Prevention Reaches Last',
          subtitle: 'Health Equity · 4 min read',
          category: 'Health Equity',
          badge: '4 min read',
          date: 'June 2026',
          excerpt: "Gambling harm doesn't fall evenly across communities. Neither does prevention. That gap is a design choice, not an accident.",
          link_url: '/insights/the-communities-prevention-reaches-last',
          image_url: '/images/insights-3.jpg',
          content_html: '<p class="lead">Gambling harm doesn\'t fall evenly across communities. Neither does prevention. That gap is a design choice, not an accident.</p><p>Decades of epidemiological research confirm what frontline workers experience every day: problem gambling disproportionately impacts communities of color, working-class neighborhoods, and underserved populations who face higher concentrations of gambling venues and predatory marketing.</p><blockquote class="story-pull-quote text-gold">&ldquo;Health equity in prevention means ensuring that the communities bearing the heaviest burdens receive the most targeted resources, culturally rooted tools, and accessible care.&rdquo;</blockquote><p>Closing this gap requires intentional strategy:</p><ul><li><strong>Language and cultural fluency:</strong> Messaging must reflect the lived experiences and values of the community, not just translated boilerplate text.</li><li><strong>Investing in local recovery ecosystems:</strong> Partnering with Recovery Oriented Systems of Care (ROSC) and grassroots faith networks.</li><li><strong>Policy advocacy:</strong> Ensuring dedicated public health funding is allocated to community-based prevention and harm-reduction infrastructure.</li></ul><p>When we design public health initiatives centered on those who have historically been reached last, the entire public health system becomes stronger, more resilient, and more just.</p>',
          sort_order: 3
        }
      ]
    }
  }
};

/**
 * Fetch all page data (page row, key-value content, and structured collections)
 * with graceful database fallback matching the full seed data.
 */
export async function getPageData(slug) {
  const fallback = FALLBACK_DATA[slug] || {
    page: { slug, name: slug, is_active: 1 },
    content: {},
    collections: {}
  };

  try {
    // 1. Fetch Page Record
    const pageRows = await query('SELECT * FROM website_pages WHERE slug = ? LIMIT 1', [slug]);
    const page = (pageRows && pageRows.length > 0) ? pageRows[0] : fallback.page;

    // 2. Fetch Content Key-Values
    const contentRows = await query(
      `SELECT wc.section, wc.key_name, wc.content_value 
       FROM website_content wc 
       JOIN website_pages wp ON wc.page_id = wp.id 
       WHERE wp.slug = ?`,
      [slug]
    );

    const content = {};
    // Start with fallback values
    if (fallback.content) {
      for (const [secKey, secObj] of Object.entries(fallback.content)) {
        content[secKey] = { ...secObj };
      }
    }

    // Overlay database values
    if (contentRows && contentRows.length > 0) {
      for (const row of contentRows) {
        if (!content[row.section]) content[row.section] = {};
        content[row.section][row.key_name] = row.content_value;
      }
    }

    // 3. Fetch Structured Collections
    const collectionRows = await query(
      `SELECT col.section_name, col.item_slug, col.title, col.subtitle, col.badge, 
              col.content_html, col.image_url, col.link_url, col.icon_svg, col.category, 
              col.meta_json, col.sort_order, col.is_active 
       FROM website_collections col 
       JOIN website_pages wp ON col.page_id = wp.id 
       WHERE wp.slug = ? AND col.is_active = 1
       ORDER BY col.sort_order ASC, col.id ASC`,
      [slug]
    );

    const collections = {};
    // Start with fallback collections
    if (fallback.collections) {
      for (const [colName, colItems] of Object.entries(fallback.collections)) {
        collections[colName] = [...colItems];
      }
    }

    // Overlay database collections if present
    if (collectionRows && collectionRows.length > 0) {
      const dbGrouped = {};
      for (const row of collectionRows) {
        if (!dbGrouped[row.section_name]) dbGrouped[row.section_name] = [];
        dbGrouped[row.section_name].push(row);
      }
      for (const [secName, items] of Object.entries(dbGrouped)) {
        collections[secName] = items;
      }
    }

    return {
      page,
      content,
      collections
    };
  } catch (err) {
    console.warn(`[CMS] Error fetching data for slug "${slug}":`, err.message);
    return fallback;
  }
}

/**
 * Check if a section is active
 */
export function isSectionActive(sectionObj) {
  if (!sectionObj) return true;
  return sectionObj.section_is_active !== '0' && sectionObj.section_is_active !== 0;
}

/**
 * Get all published insights articles
 */
export async function getArticles() {
  const { collections } = await getPageData('insights');
  return collections.articles || FALLBACK_DATA.insights.collections.articles;
}

/**
 * Get single article by slug
 */
export async function getArticleBySlug(slug) {
  const articles = await getArticles();
  return articles.find(a => (a.item_slug === slug || a.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug)) || null;
}

/**
 * Get published articles count (used by navigation logic)
 */
export async function getPublishedArticlesCount() {
  try {
    const rows = await query(
      `SELECT COUNT(*) as cnt 
       FROM website_collections col 
       JOIN website_pages wp ON col.page_id = wp.id 
       WHERE wp.slug = 'insights' AND col.section_name = 'articles' AND col.is_active = 1`
    );
    if (rows && rows.length > 0 && rows[0].cnt !== undefined) {
      return Number(rows[0].cnt);
    }
  } catch (e) {
    // fallback
  }
  return FALLBACK_DATA.insights.collections.articles.length;
}

