USE tiffany_crm;
DELETE FROM website_collections WHERE section_name = 'credibility_bar';
INSERT INTO website_collections (page_id, section_name, title, subtitle, sort_order) VALUES
(1, 'credibility_bar', '15+', 'YEARS', 1),
(1, 'credibility_bar', 'TBC', 'TBC', 2),
(1, 'credibility_bar', 'TBC', 'TBC', 3);
