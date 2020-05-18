import AWS from "aws-sdk";

/**
 * Deletes a directory (workspace) from the `prisma-playground` S3 bucket
 *
 * @param dir S3 Directory to delete
 */
export default async function downloadDir(dir: string) {
  const s3 = new AWS.S3();

  // Get a  list of all files in this directory (workspace)
  await s3
    .deleteObject({
      Bucket: "prisma-playground",
      Key: dir,
    })
    .promise();
}