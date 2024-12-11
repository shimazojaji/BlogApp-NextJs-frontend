import {editPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useEditPost() {
    const queryClient=useQueryClient();
    const {isPending:isisEditting ,mutate:editPost}=useMutation({
        mutationFn: editPostApi,
        onSuccess: data => {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey:["posts"]})
        },
        onError:(err)=>toast.error(err?.response?.data?.message)
    })
    return {isisEditting,editPost}
}
