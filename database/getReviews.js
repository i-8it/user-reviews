


// select * from reviews where id in (SELECT rev FROM jointable WHERE rest=(SELECT id FROM restaurants WHERE name='Davis''s Fantastic Handcrafted Soft Table #87'));
// select * from reviews where id in (SELECT rev FROM jointable WHERE rest=(SELECT id FROM restaurants WHERE name='Jacobson''s Incredible Unbranded Steel Pants #96'));
// select * from (select * from reviews where id in (SELECT rev FROM jointable WHERE rest=(SELECT id FROM restaurants WHERE name='Davis''s Fantastic Handcrafted Soft Table #87'))) t1 INNER JOIN (select * from users) t2 on t1.user_id=t2.id;
