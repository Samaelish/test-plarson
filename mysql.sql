WITH RECURSIVE months AS (
  SELECT 
    1 AS month_number,
    MAKEDATE(YEAR(CURRENT_DATE), 1) AS first_day_of_month
  UNION ALL
  SELECT 
    month_number + 1,
    DATE_ADD(first_day_of_month, INTERVAL 1 MONTH)
  FROM months
  WHERE month_number < 12
)
SELECT
  DATE_FORMAT(first_day_of_month, '%M') AS month,
  DAY(LAST_DAY(first_day_of_month)) AS days_in_month
FROM months;