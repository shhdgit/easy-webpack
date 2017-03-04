#!/bin/bash

webpack --config ./build/webpack.config.prod.js && \
gaa && \
gcam $@ && \
ggpush
