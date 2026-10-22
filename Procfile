web: python manage.py migrate --noinput && python manage.py collectstatic --noinput && gunicorn portfolio_alex.wsgi --worker-class gthread --workers 2 --threads 8 --timeout 120
