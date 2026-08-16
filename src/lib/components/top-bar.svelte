<script>
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, "0")

    if(hours > 12) {
        hours -= 12
    }

    let time = hours + ":" + minutes
</script>

<div class="font-display flex w-full items-center justify-between align-middle">
    <div class="px-4 text-white">
        <p class="text-3xl">{time}</p>
    </div>
    <div class="flex items-center justify-center bg-black w-12 h-12 rounded-full my-0.5">
        <div class="flex items-center justify-center bg-[#0a0b24] size-8 rounded-full">
            <div class="flex items-center justify-center bg-gray-800 size-3 rounded-full">

            </div>
        </div>
    </div>
    <div class="w-25">
    </div>
</div>
