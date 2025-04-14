WITH RECURSIVE months AS (
  SELECT 
    1 AS month_number,
    DATE(DATE_TRUNC('year', CURRENT_DATE)) AS first_day_of_month
  UNION ALL
  SELECT 
    month_number + 1,
    first_day_of_month + INTERVAL '1 month'
  FROM months
  WHERE month_number < 12
)
SELECT
  TO_CHAR(first_day_of_month, 'Month') AS month,
  EXTRACT(DAY FROM (first_day_of_month + INTERVAL '1 month - 1 day')) AS days_in_month
FROM months;