# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase, SimpleTestCase
from django.urls import reverse, resolve
from campingbike.views import index, descarrega, maps

# Tests
class testUrls(SimpleTestCase):

    def test_url(self):
        url = reverse('index')
        print(resolve(url))
        self.assertEquals(resolve(url).func, index)
