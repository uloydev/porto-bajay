

export class HorizontalScrollHandler {
    private threshold: number;
    private currentSlide = 0;
    private horizontalSlide = 0;
    private isLastDirectionPositive = false;
    private container: HTMLElement;

    constructor(container: HTMLElement, threshold: number) {
        this.threshold = threshold;
        this.container = container;
    }

    public handleScroll = (e: WheelEvent) => {
        const children = this.container.children

        // if scroll is horizontal, prevent default
        if (Math.abs(e.deltaY) < Math.abs(e.deltaX) || e.shiftKey) return e.preventDefault();

        // Determine scroll direction
        const isScrollingDown = e.deltaY > 0;

        // Reset horizontalSlide if scroll direction changes
        if (isScrollingDown !== this.isLastDirectionPositive) {
            this.isLastDirectionPositive = isScrollingDown;
            this.horizontalSlide = 0;
        }

        // Accumulate horizontalSlide
        this.horizontalSlide += Math.abs(e.deltaY);

        // Check if threshold is reached
        if (this.horizontalSlide > this.threshold) {
            // Handle scrolling to next or previous slide
            const nextSlide = isScrollingDown ? this.currentSlide + 1 : this.currentSlide - 1;
            
            // Ensure nextSlide is within bounds
            if (nextSlide >= 0 && nextSlide < children.length) {
                const scrollToElement = children.item(nextSlide) as HTMLDivElement;
                if (scrollToElement) {
                    scrollToElement.scrollIntoView({ behavior: 'smooth' });
                    this.currentSlide = nextSlide;
                }
            }

            // Reset horizontalSlide after handling scroll
            this.horizontalSlide = 0;
        }
    }
}

export class DragScrollHandler {
    private dragMouseIsDown = false;
    private dragScrollContainer: HTMLElement;
    private startX = 0;
    private startY = 0;
    private scrollLeftStart = 0;
    private scrollTopStart = 0;

    constructor(container: HTMLElement) {
        this.dragScrollContainer = container;
    }

    public dragMouseDown = (e: MouseEvent) => {
		e.preventDefault();
		this.dragMouseIsDown = true;
        this.startX = e.pageX;
        this.startY = e.pageY;
        this.scrollLeftStart = this.dragScrollContainer.scrollLeft;
        this.scrollTopStart = this.dragScrollContainer.scrollTop;
	};

	public dragMouseUp = (e: MouseEvent) => {
		e.preventDefault();
		this.dragMouseIsDown = false;
	};

	public dragMouseScroll = (e: MouseEvent) => {
        e.preventDefault();
		if (this.dragMouseIsDown) {
			const deltaX = this.startX - e.pageX;
            const deltaY = this.startY - e.pageY;
            this.dragScrollContainer.scrollLeft = this.scrollLeftStart + deltaX;
            this.dragScrollContainer.scrollTop = this.scrollTopStart + deltaY;
		}
	}
}