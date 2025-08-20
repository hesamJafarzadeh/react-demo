import React, { useEffect, useState } from "react";
import api from "../../../plugins/axios";
import { useParams } from "react-router";

export default function ProductComments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await api.get(`/comments?postId=${id}`);
        setComments(res.data);
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [id]);

  if (loading) {
    return <p className="text-gray-500 mt-8 space-y-6">Loading comments ...</p>;
  }

  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-xl font-bold text-gray-800">Comments</h3>
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments here.</p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-gray-200 p-4 bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-700">
                {comment.name}
              </span>
              <span className="text-xs text-gray-400">
                {new Date().toLocaleString()}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
