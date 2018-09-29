/*

SELECT * FROM (
  SELECT * FROM reviews WHERE id IN (
    SELECT rev FROM jointable WHERE rest=(
      SELECT id FROM restaurants WHERE name=UPPER('Davis''s Fantastic Handcrafted Soft Table #87')
   )
 )
) t1
INNER JOIN (
  select * from users
) t2
on t1.user_id=t2.id;

*/

// SELECT * FROM (SELECT * FROM reviews WHERE id IN (SELECT rev FROM jointable WHERE rest=(SELECT id FROM restaurants WHERE name=UPPER('davis''s fantastic handcrafted soft table #87')))) t1 INNER JOIN (select * from users) t2 on t1.user_id=t2.id;
