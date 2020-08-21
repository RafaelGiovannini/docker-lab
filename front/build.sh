IMG_NAME=angularcat
REPO_NAME=guineves1998/frontcat
docker build -t ${IMG_NAME} .
docker tag ${IMG_NAME} ${REPO_NAME}
docker push ${REPO_NAME}