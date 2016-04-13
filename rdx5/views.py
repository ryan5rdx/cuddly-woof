from django.shortcuts import render
from django.conf import settings


def index(request):
    context = {
        'STATIC_URL': settings.STATIC_URL
    }
    return render(request, 'rdx5/index.html', context)
