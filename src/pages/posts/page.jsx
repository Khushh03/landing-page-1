import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                console.log(data);
            });
    }, []);
    return (
        <main>
            <h1 className="text-3xl font-bold mb-6">Featured posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts?.posts?.map((post) => (
                    <Card key={post.id} className="flex flex-col">
                        <CardHeader>
                            {/* <div className="aspect-w-16 aspect-h-9 mb-4">
                                <img src={post.image} alt={post?.title} className="object-cover rounded-md" />
                            </div> */}
                            <CardTitle className="line-clamp-1">{post?.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="line-clamp-4">{post?.body}</p>
                                <div className="flex gap-4">
                                    {post?.tags?.map((tag, i) => (
                                        <Badge key={tag + i} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" className="flex gap-2">
                                        <ThumbsUp />
                                        {post?.reactions?.likes}
                                    </Button>
                                    <Button variant="outline" className="flex gap-2">
                                        <ThumbsDown />
                                        {post?.reactions?.dislikes}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Link to={`/products/${post?.id}`} className="w-full">
                                <Button className="w-full">View Post</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
