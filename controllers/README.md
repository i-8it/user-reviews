CRUD

In all cases, [restaurant] is either a numerical ID (between 0 and 1,000,000), or a restaurant name. Name should be in lowercase, and all spaces replaced by dashes. For example, to query "Minhas Micro Brewery", use "minhas-micro-brewery".

--GET--
Send "get" request to /reviews/[restaurant]. Returns a JSON object.

--POST--
Add an entry by sending a "post" request to /reviews. Add parameters with a query string.

--PUT--
Edit an entry by sending a "put" request to /reviews/[restaurant], with parameters to change are passed in as a query string.

--DELETE--
Send "delete" request to /reviews/[restaurant].
