# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.




class Comentari(models.Model):
    temps = models.CharField(max_length=10)
    km = models.IntegerField()
    link = models.CharField(max_length=200)
    imatge = models.CharField(max_length=200)
    opinio = models.CharField(max_length=300)

    def __str__(self):
        return self.nom


class Track(models.Model):
    latitud = models.FloatField(null=True, blank=True, default=None)
    longitud = models.FloatField(null=True, blank=True, default=None)

class Ruta(models.Model):
    nom = models.CharField(max_length=30)
    comentari = models.ManyToManyField(Comentari, null=False)
    track = models.ManyToManyField(Track , null=True)