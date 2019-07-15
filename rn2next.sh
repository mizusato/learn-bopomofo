#!/bin/bash

output="next"
rm -rf "${output}"/{compatible,pages,widgets,styles,tools,static} 2>/dev/null
mkdir "${output}"/{compatible,pages,widgets,styles,tools,static}
cp tools/* "${output}"/tools/
cp assets/* "${output}"/static/
cp web/pages/* "${output}"/pages/
cp web/widgets/* "${output}"/widgets/
cp web/styles/* "${output}"/styles/
cp -r pages/tutorial/ "${output}"/compatible/tutorial
sed -r "s/require\('\.\.\/\.\.\/assets\/([^']+)'\)/'\/static\/\1'/g" \
    -i "${output}"/compatible/tutorial/*
