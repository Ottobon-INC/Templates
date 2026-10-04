const fs = require('fs');

// 1. Read files
const aboutPath = 'src/components/AboutSection.tsx';
const campusPath = 'src/components/CampusCareersSection.tsx';

let aboutContent = fs.readFileSync(aboutPath, 'utf8');
let campusContent = fs.readFileSync(campusPath, 'utf8');

// 2. Extract Campus Life (Lines 35 to 168) from CampusCareersSection.tsx
const campusLines = campusContent.split('\n');
// Assuming the first section is 1. CAMPUS STORY and second is 2. STUDENT LIFE
// We can use string matching to be safe.
const startIdx = campusLines.findIndex(l => l.includes('{/* 1. CAMPUS STORY'));
const endIdx = campusLines.findIndex(l => l.includes('{/* 3. CAREERS'));

if (startIdx !== -1 && endIdx !== -1) {
    const extractedCampusLife = campusLines.slice(startIdx, endIdx).join('\n');
    
    // Remove it from campusContent
    campusLines.splice(startIdx, endIdx - startIdx);
    fs.writeFileSync(campusPath, campusLines.join('\n'));

    // 3. Remove Institutional Leadership from AboutSection.tsx
    let aboutLines = aboutContent.split('\n');
    const leadStartIdx = aboutLines.findIndex(l => l.includes('{/* 4. LEADERSHIP'));
    const leadEndIdx = aboutLines.findIndex(l => l.includes('</section>'));
    
    if (leadStartIdx !== -1 && leadEndIdx !== -1) {
        aboutLines.splice(leadStartIdx, leadEndIdx - leadStartIdx, extractedCampusLife);
        
        // Fix imports in AboutSection.tsx
        let updatedAbout = aboutLines.join('\n');
        updatedAbout = updatedAbout.replace('import { timelineData, leadershipData }', 'import { timelineData, campusStoryData, studentLifeActivities }');
        updatedAbout = updatedAbout.replace('import { ChevronLeft, ChevronRight, Compass, Target, Eye }', 'import { ChevronLeft, ChevronRight, Sparkles, Compass, Target, Eye }');
        
        fs.writeFileSync(aboutPath, updatedAbout);
        console.log('Successfully moved section.');
    } else {
        console.log('Could not find leadership section in About.');
    }
} else {
    console.log('Could not find campus story in CampusCareers.');
}
