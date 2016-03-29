from django.conf.urls import patterns, url

urlpatterns = patterns(
    '',
    # Examples:
    # url(r'^$', 'rdx.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'shion.views.index', name='index'),
    url(r'^home/', 'shion.views.home', name='index'),
)
