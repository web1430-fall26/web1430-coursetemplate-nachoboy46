# Notes

This was by far the most confusing lab so far, but I think I got the hang of it by the end.
Before I used set, my get categories was sort of like a double loop type structure, and those are never efficient,
so I'm glad sets exist so I can avoid that. Without .slice it change the origanl array as well, which isn't good
for a fully self-contained function, you only want it to produce output. To handle the filters being the same, I just
made a smaller sub-function thing that filtered and sorted it again each time I got new drop-down input.