import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  const { type } = params;
  const transformation = transformationTypes[type];
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <div>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </div>
  );
};

export default AddTransformationTypePage;
