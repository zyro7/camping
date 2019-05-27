# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Ruta(models.Model):
    nom = models.CharField(max_length=20)
    def __str__(self):
        return self.nom

class Comentari(models.Model):
    TIPUS = (
        ('F', 'Familiar'),
        ('P', 'Parelles'),
        ('E', 'Endurance'),
    )
    comentari = models.ForeignKey(Ruta, on_delete=models.CASCADE)
    tipus = models.CharField(max_length=1,choices=TIPUS,null=True,blank=True)
    temps = models.CharField(max_length=10)
    km = models.IntegerField()
    link = models.CharField(max_length=200)
    imatge = models.CharField(max_length=200)
    opinio = models.CharField(max_length=300)

    def __str__(self):
        return self.tipus