import { S as SITE } from './config_f57_clwN.mjs';

const postFilter = ({ data }) => {
  const isPublishTimePassed = Date.now() > new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !data.draft && isPublishTimePassed;
};

export { postFilter as p };
