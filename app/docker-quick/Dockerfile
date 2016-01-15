#
# Network of Innovators Dockerfile for web
#
# https://github.com/govlab/noi2
#

FROM thegovlab/noi2:docker-base-0.1
MAINTAINER Atul Varma <atul@thegovlab.org>

COPY requirements.quick.txt /noi/app/
RUN apt-get install -y pkg-config
RUN apt-get install -y libpng12-dev
RUN apt-get install -y libfreetype6-dev
RUN pip install --upgrade -r /noi/app/requirements.quick.txt
