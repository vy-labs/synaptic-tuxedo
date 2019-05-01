
#!/bin/bash
set -ex
gulp publish:storybook --bucket ${BUILD_BUCKET} --dirprefix /build/${BUILD_FOLDER}/
aws s3 sync s3://${BUILD_BUCKET}/build/${BUILD_FOLDER}/ s3://${WEBSITE_BUCKET}/ --acl public-read --delete
