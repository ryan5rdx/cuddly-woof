from django.shortcuts import render


def index(request):
    context = {}
    return render(request, 'rdx5/index.html', context)
