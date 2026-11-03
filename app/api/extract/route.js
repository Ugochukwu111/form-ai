export async function POST(request) {
  const formData = await request.formData();

  const document = formData.get("document");

  // Check if a file was uploaded
  if (!document || typeof document === "string") {
    return Response.json(
      {
        success: false,
        message: "No document uploaded",
      },
      { status: 400 }
    );
  }

  // Allow only images
  if (!document.type.startsWith("image/")) {
    return Response.json(
      {
        success: false,
        message: "Only image files are allowed",
      },
      { status: 400 }
    );
  }

  // Maximum file size: 5MB
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  if (document.size > MAX_FILE_SIZE) {
    return Response.json(
      {
        success: false,
        message: "File size must not exceed 5MB",
      },
      { status: 400 }
    );
  }

  const bytes = await document.arrayBuffer();

const buffer = Buffer.from(bytes);

console.log(buffer);

  return Response.json({
    success: true,
    message: "Document received and validated",
    filename: document.name,
    size: document.size,
    type: document.type,
  });
}