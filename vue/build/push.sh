#!/bin/bash

yarn run build && \
gaa && \
gcam $@ && \
ggpush
