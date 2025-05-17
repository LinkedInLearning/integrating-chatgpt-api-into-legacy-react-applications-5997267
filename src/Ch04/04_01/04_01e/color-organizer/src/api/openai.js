export async function getColorNameFromAPI(hex) {
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        messages: [
          {
            role: "user",
            content: `What would be a creative and friendly name for the color ${hex}? Just return the name, nothing else.`
          }
        ],
        temperature: 0.7
      })
    }
  );
  const data = await response.json();
  if (!response.ok) {
    console.error("Error from OpenAI", data);
    throw new Error("Failed to fetch color name");
  }
  return (
    data.choices?.[0]?.message?.content?.trim() ||
    "Unnamed Color"
  );
}
