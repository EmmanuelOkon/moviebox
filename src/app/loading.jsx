import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center max-h-fit my-auto">
      <Image
        className="h-full"
        src="/assets/spinner.svg"
        alt="loading..."
        width={10}
        height={10}
      />
    </div>
  );
}
