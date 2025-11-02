import { NextResponse } from "next/server";

const dispatchBacklog: Array<{
  id: string;
  timestamp: number;
  payload: Record<string, unknown>;
}> = [];

export async function POST(request: Request) {
  const payload = await request.json();

  const confirmationId = `CR-${Math.random().toString(36).slice(2, 6).toUpperCase()}-${Date.now()
    .toString()
    .slice(-4)}`;

  dispatchBacklog.push({
    id: confirmationId,
    timestamp: Date.now(),
    payload
  });

  return NextResponse.json(
    {
      confirmationId,
      etaMinutes: 11,
      status: "Dispatching clinical driver",
      queueDepth: dispatchBacklog.length
    },
    {
      status: 201,
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
