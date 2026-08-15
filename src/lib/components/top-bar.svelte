<script>
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, "0")

    if(hours > 12) {
        hours -= 12
    }

    let time = hours + ":" + minutes
</script>

<div class="flex w-full items-center justify-between align-middle">
    <div class="px-10 text-white">
        <p class="text-2xl">{time}</p>
    </div>
    <div class="bg-black w-200 h-7">
    </div>
    <div class="flex items-center align-middle px-10 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-increasing-icon lucide-chart-no-axes-column-increasing"><path d="M5 21v-6"/><path d="M12 21V9"/><path d="M19 21V3"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wifi-icon lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-battery-full-icon lucide-battery-full"><path d="M10 10v4"/><path d="M14 10v4"/><path d="M22 14v-4"/><path d="M6 10v4"/><rect x="2" y="6" width="16" height="12" rx="2"/></svg>
    </div>
</div>