import React from "react";

export default function TodoDetail({ params }: { params: { id: string } }) {
  return <div>Todo: {params.id} Detail</div>;
}
