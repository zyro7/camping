# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-10 16:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('campingbike', '0002_auto_20190510_1538'),
    ]

    operations = [
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitud', models.FloatField(blank=True, default=None, null=True)),
                ('longitud', models.FloatField(blank=True, default=None, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='ruta',
            name='Latitud',
        ),
        migrations.RemoveField(
            model_name='ruta',
            name='Longitud',
        ),
        migrations.AddField(
            model_name='ruta',
            name='nom',
            field=models.CharField(default=1, max_length=30),
        ),
        migrations.AlterField(
            model_name='comentari',
            name='nom',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='campingbike.Ruta'),
        ),
        migrations.AddField(
            model_name='track',
            name='ruta',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='campingbike.Ruta'),
        ),
    ]
