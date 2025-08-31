# 📸 Adding Your Photo to the About Section

## 🎯 **How to Add Your Photo:**

### **Option 1: Replace the Placeholder (Recommended)**
1. **Find the About component**: `components/About.tsx`
2. **Locate this section** (around line 35-45):
   ```tsx
   <div className="w-80 h-80 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1 animate-glow">
     <div className="w-full h-full rounded-full bg-dark-200 flex items-center justify-center overflow-hidden">
       {/* Replace this div with your actual photo */}
       <div className="text-6xl text-gray-400">📸</div>
       <div className="absolute bottom-2 text-xs text-gray-500 text-center">
         Add your photo here
       </div>
     </div>
   </div>
   ```

3. **Replace with your photo**:
   ```tsx
   <div className="w-80 h-80 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-pink p-1 animate-glow">
     <div className="w-full h-full rounded-full overflow-hidden">
       <img 
         src="/your-photo.jpg" 
         alt="Debaditya Saha" 
         className="w-full h-full object-cover"
       />
     </div>
   </div>
   ```

### **Option 2: Add Photo to Public Folder**
1. **Place your photo** in the `public/` folder
2. **Name it** something like `profile-photo.jpg` or `debaditya-photo.jpg`
3. **Update the src** in the component to match your filename

### **Option 3: Use External URL**
```tsx
<img 
  src="https://your-photo-url.com/photo.jpg" 
  alt="Debaditya Saha" 
  className="w-full h-full object-cover"
/>
```

## 🎨 **Photo Requirements:**
- **Format**: JPG, PNG, or WebP
- **Size**: At least 400x400 pixels (will be displayed at 320x320)
- **Style**: Professional headshot or business photo
- **Background**: Clean, professional background

## 🔧 **CSS Classes Used:**
- `w-full h-full`: Makes photo fill the container
- `object-cover`: Maintains aspect ratio while covering the area
- `overflow-hidden`: Ensures photo stays within the rounded container

## ✨ **Result:**
Your photo will appear in a beautiful glowing circular frame with neon cyan, purple, and pink gradient borders, maintaining the futuristic theme of your portfolio!

---

**Need help?** The photo will automatically scale and crop to fit perfectly within the circular frame. 