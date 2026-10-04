import sys

about_path = 'src/components/AboutSection.tsx'
campus_path = 'src/components/CampusCareersSection.tsx'

with open(about_path, 'r', encoding='utf-8') as f:
    about_content = f.read()

with open(campus_path, 'r', encoding='utf-8') as f:
    campus_content = f.read()

campus_lines = campus_content.split('\n')
start_idx = next((i for i, line in enumerate(campus_lines) if '{/* 1. CAMPUS STORY' in line), -1)
end_idx = next((i for i, line in enumerate(campus_lines) if '{/* 3. CAREERS' in line), -1)

if start_idx != -1 and end_idx != -1:
    extracted = '\n'.join(campus_lines[start_idx:end_idx])
    del campus_lines[start_idx:end_idx]
    with open(campus_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(campus_lines))

    about_lines = about_content.split('\n')
    lead_start_idx = next((i for i, line in enumerate(about_lines) if '{/* 4. LEADERSHIP' in line), -1)
    lead_end_idx = next((i for i, line in enumerate(about_lines) if '</section>' in line), -1)

    if lead_start_idx != -1 and lead_end_idx != -1:
        about_lines[lead_start_idx:lead_end_idx] = [extracted]
        updated_about = '\n'.join(about_lines)
        updated_about = updated_about.replace('import { timelineData, leadershipData }', 'import { timelineData, campusStoryData, studentLifeActivities }')
        updated_about = updated_about.replace('import { ChevronLeft, ChevronRight, Compass, Target, Eye }', 'import { ChevronLeft, ChevronRight, Sparkles, Compass, Target, Eye }')
        
        with open(about_path, 'w', encoding='utf-8') as f:
            f.write(updated_about)
        print('Moved section.')
    else:
        print('Leadership not found in About.')
else:
    print('Campus Story not found in Campus.')

