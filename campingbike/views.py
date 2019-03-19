from django.shortcuts import render
from .models import Ruta

# Create your views here.
def index(request):
    return render(request,'campingbike/index.html')

def familiar(request):
    rutes = Ruta.objects.filter(tipus='F')
    return render(request,'campingbike/familiar.html',{'Rutes':rutes})

def parelles(request):
    rutes = Ruta.objects.filter(tipus='P')
    return render(request,'campingbike/parelles.html',{'Rutes':rutes})

def endurance(request):
    rutes = Ruta.objects.filter(tipus='E')
    return render(request,'campingbike/endurance.html',{'Rutes':rutes})

def maps(request):
    return render(request,'campingbike/maps.html')

def experiencies(request):
    return render(request,'campingbike/experiencies.html')