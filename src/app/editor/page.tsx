import ReadInput from "@/components/ReadInput";
import CreatePost from "@/components/CreatePost";
import { getServerSession } from "next-auth";

export default async function Editor() {
  //세션 가져오기 -> 유저이메일 가져오기 props로 넣기
  const session = await getServerSession();
  const sessionEmail: any = session?.user?.email;

  return (
    <div>
      <ReadInput />
      <CreatePost sessionEmail={sessionEmail} />
    </div>
  );
}
