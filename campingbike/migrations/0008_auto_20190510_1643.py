# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-10 16:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campingbike', '0007_auto_20190510_1643'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ruta',
            name='comentari',
            field=models.ManyToManyField(to='campingbike.Comentari'),
        ),
    ]
