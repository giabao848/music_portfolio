// =========================================================================
// FILE DỮ LIỆU CHUNG CHO CẢ 3 TRANG (index.html, du-an.html, tong-ket.html)
// Bạn chỉ cần sửa thông tin cá nhân, mục tiêu, 6 bài tập & tổng kết ở đây!
// =========================================================================
const SITE_DATA = {
  // -------------------------------------------------------------------------
  // CÂU 1. TRANG GIỚI THIỆU – ABOUT ME (index.html)
  // Đáp ứng đủ 3 ý yêu cầu:
  // (1) Thông tin cá nhân ngắn gọn: họ tên, ngành học, sở thích, ảnh đại diện
  // (2) Mục tiêu học tập và định hướng phát triển cá nhân
  // (3) Mục tiêu của Portfolio
  // -------------------------------------------------------------------------
  profile: {
    greeting: "♪ xin chào, mình là",
    fullName: "Lê Đức Huy",
    studentId: "[Mã sinh viên của bạn]",
    year: "Năm 2",
    major: "Sư phạm Âm nhạc",
    school: "Trường Đại Học Sư Phạm Nghệ Thuật Trung Ương",
    className: "[Lớp / Khóa]",
    email: "[emailcuaban@gmail.com]",
    // Đặt ảnh vào thư mục images/ và điền tên file (ví dụ: "images/photo1.jpg")
    avatarUrl: "",
    secondPhotoUrl: "",
    quote: "“Âm nhạc chạm đến cảm xúc, còn công nghệ số giúp bài giảng lan tỏa gần gũi hơn.”",
    hobbies: ["🎧 Nghe nhạc Indie"],
    courseName: "Nhập môn Công nghệ số và AI"
  },

  // Ý 2 của Câu 1: Mục tiêu học tập và định hướng phát triển cá nhân
  learningGoal: {
    title: "Mục tiêu học tập & Định hướng phát triển cá nhân",
    summary:
      "Hoàn thành tốt môn Nhập môn Công nghệ số và AI, làm chủ các kỹ năng số nền tảng và định hướng trở thành giáo viên Sư phạm Âm nhạc ứng dụng công nghệ hiện đại vào giảng dạy.",
    points: [
      "Nắm vững kỹ năng quản lý dữ liệu số, tìm kiếm thông tin học thuật và sử dụng AI có chọn lọc, có trách nhiệm.",
      "Ứng dụng công nghệ và AI để thiết kế bài giảng, học liệu âm nhạc trực quan, sinh động và gần gũi với học sinh.",
      "Không ngừng rèn luyện chuyên môn âm nhạc song song với năng lực số để thích ứng với giáo dục hiện đại."
    ]
  },

  // Ý 3 của Câu 1: Mục tiêu của Portfolio
  portfolioGoal: {
    title: "Mục tiêu của Portfolio",
    summary:
      "Xây dựng không gian lưu trữ số khoa học cho toàn bộ quá trình học tập học phần Nhập môn Công nghệ số và AI.",
    points: [
      "Thể hiện các kỹ năng số và tư duy ứng dụng AI đã học qua từng bài tập thực hành.",
      "Lưu trữ có hệ thống mục tiêu, quy trình thực hiện và sản phẩm cá nhân để thuận tiện truy cập, đối chiếu và chia sẻ.",
      "Ghi nhận quá trình tự học, rút kinh nghiệm từ những khó khăn để hoàn thiện bản thân."
    ]
  },

  // -------------------------------------------------------------------------
  // CÂU 2. TRANG DỰ ÁN – 6 BÀI TẬP THỰC HÀNH (du-an.html)
  // -------------------------------------------------------------------------
 assignments: [
    {
      code: "Bài 01",
      status: "Đã hoàn thành",
      title: "Thao tác cơ bản với tệp tin và thư mục",
      shortDesc: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin/thư mục trên Windows.",
      goal: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa (tạm thời và vĩnh viễn) cũng như khôi phục tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows.",
      process:
        "1. Mở File Explorer (Windows + E) và truy cập ổ đĩa dữ liệu (D: / Documents).\n" +
        "2. Tạo thư mục chính đặt tên theo cú pháp ThucHanh_HoTenSinhVien và thư mục con TaiLieu bên trong.\n" +
        "3. Tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt rồi sao chép (Ctrl + C / Ctrl + V) sang thư mục TaiLieu.\n" +
        "4. Tạo tệp DiChuyen.txt và thực hiện thao tác di chuyển (Ctrl + X / Ctrl + V) vào thư mục TaiLieu.\n" +
        "5. Thực hành xóa tạm thời tệp GhiChuQuanTrong.txt vào Recycle Bin, xóa vĩnh viễn tệp DiChuyen.txt (Shift + Delete) và khôi phục (Restore) tệp từ Thùng rác.\n" +
        "6. Chụp ảnh màn hình minh họa chi tiết từng bước thực hiện và tổng hợp vào tệp văn bản báo cáo.",
      toolsUsed:
        "• Công cụ hệ thống & văn phòng: Windows File Explorer (quản lý tệp/thư mục), Notepad (tạo tệp .txt), Snipping Tool (chụp ảnh màn hình từng bước), Microsoft Word (trình bày báo cáo và xuất PDF).\n" +
        "• Mức độ sử dụng AI: Không sử dụng AI (tự thao tác trực tiếp 100% trên máy tính).",
      errorsAndFix:
        "• Nhầm lẫn giữa thao tác Sao chép (Copy) và Di chuyển (Cut) khiến tệp gốc không còn ở thư mục cũ; đã kiểm tra lại cây thư mục và thực hiện đúng quy trình.\n" +
        "• Khi dùng tổ hợp Shift + Delete dễ thao tác nhầm do tệp bị xóa vĩnh viễn không qua Thùng rác; đã rà soát kỹ tên tệp trước khi xác nhận hộp thoại cảnh báo.",
      result:
        "Hoàn thành đầy đủ 12 bước thao tác quản lý tệp tin và thư mục theo yêu cầu; xuất tệp văn bản báo cáo kèm ảnh chụp màn hình minh họa rõ nét cho từng bước thực hiện.",
      productLink: "files/bai1.pdf"
    },
    {
      code: "Bài 02",
      status: "Hoàn thành",
      title: "Tìm kiếm & Đánh giá thông tin học thuật",
      shortDesc: "Khai thác từ khóa nâng cao, tìm tài liệu thanh nhạc giọng Soprano và kiểm chứng độ tin cậy khoa học.",
      goal: "Thu thập, phân tích và thẩm định độ tin cậy của các nguồn học liệu khoa học trong và ngoài nước liên quan đến kỹ thuật thanh nhạc và đặc điểm giọng Soprano, làm cơ sở xây dựng biện pháp rèn luyện cho học viên tại Trung tâm Nghệ thuật Sol Art, Hà Nội.",
      process:
        "1. Xác định chủ đề, phạm vi và xây dựng bộ từ khóa song ngữ chuyên ngành (VD: soprano voice training, vocal pedagogy, soprano passaggio, chuyển đổi âm khu giọng nữ cao...).\n" +
        "2. Tra cứu trên 4 nhóm nguồn chính (Google Scholar, PubMed, tạp chí Journal of Voice, PLOS ONE, giáo trình trong nước và quốc tế) và phân loại thành 3 nhóm tài liệu: lý luận, chuyên sâu giọng Soprano, nghiên cứu thực nghiệm.\n" +
        "3. Chấm điểm thẩm định 10 tài liệu tiêu biểu theo thang điểm 4 dựa trên 4 tiêu chí (Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, Trích dẫn & tính cập nhật) và lập danh mục tài liệu tham khảo.",
      toolsUsed:
        "• Cơ sở dữ liệu học thuật: Google Scholar, PubMed, Journal of Voice, PLOS ONE (tra cứu công trình khoa học và chỉ số trích dẫn).\n" +
        "• Công cụ AI & Mục đích sử dụng: ChatGPT — hỗ trợ gợi ý mở rộng bộ từ khóa chuyên ngành thanh nhạc tiếng Anh (soprano voice training, passaggio...) và dịch thuật ngữ chuyên sâu để đối chiếu; toàn bộ việc tìm nguồn, đọc kiểm chứng và chấm điểm độ tin cậy đều tự thực hiện.",
      errorsAndFix:
        "Một số nghiên cứu thực nghiệm được khảo sát trên đối tượng nam ca sĩ hoặc ca sĩ chuyên nghiệp nên không thể áp dụng máy móc cho học viên đang đào tạo; đồng thời một vài bài báo quốc tế còn thiếu thông tin thư mục đầy đủ. Đã xử lý bằng cách đối chiếu chéo với giáo trình sư phạm nền tảng trong nước, ghi chú rõ giới hạn đối tượng áp dụng và đánh dấu các nguồn cần bổ sung thông tin xuất bản.",
      result:
        "Hoàn thiện báo cáo tổng hợp quy trình tìm kiếm học liệu chuyên ngành thanh nhạc, bảng xếp hạng độ tin cậy thang điểm 4 cho 10 công trình tiêu biểu (đa số đạt mức 3,5–4,0 điểm) cùng danh mục tài liệu tham khảo chuẩn học thuật.",
      productLink: "files/bai2.pdf"
    },
    {
      code: "Bài 03",
      status: "Đang cập nhập",
      title: "Giao tiếp & Đặt câu lệnh (Prompt) với AI",
      shortDesc: "Thiết kế 3 cấp độ Prompt (Cơ bản – Cải tiến – Nâng cao) cho 3 tác vụ học tập, thử nghiệm trên ChatGPT và đúc kết nguyên tắc viết Prompt hiệu quả.",
      goal: "Rèn luyện kỹ năng thiết kế câu lệnh (Prompt Engineering) theo các cấp độ từ cơ bản đến nâng cao cho 3 tác vụ học tập phổ biến; biết so sánh chất lượng phản hồi của AI và rút ra nguyên tắc tối ưu hóa câu lệnh phục vụ học tập và giảng dạy Sư phạm Âm nhạc.",
      process:
        "1. Chọn 3 tác vụ học tập gắn với chuyên ngành Sư phạm Âm nhạc: (1) Tóm tắt tài liệu lịch sử âm nhạc, (2) Giải thích khái niệm hòa thanh phức tạp, (3) Tạo bộ câu hỏi ôn tập môn Lý thuyết âm nhạc.\n" +
        "2. Viết 9 phiên bản câu lệnh chia làm 3 cấp độ cho mỗi tác vụ: Prompt cơ bản (ngắn gọn), Prompt cải tiến (chi tiết, có định dạng đầu ra) và Prompt nâng cao (áp dụng Role Prompting, Chain-of-Thought, Few-shot Examples).\n" +
        "3. Thử nghiệm trực tiếp toàn bộ 9 câu lệnh trên ChatGPT, chụp ảnh minh họa và lập bảng so sánh chất lượng kết quả.\n" +
        "4. Phân tích nguyên nhân chênh lệch chất lượng phản hồi và tổng hợp bộ nguyên tắc viết Prompt hiệu quả.",
      toolsUsed:
        "• Công cụ AI & Mục đích sử dụng: ChatGPT (GPT-4o / GPT-4o mini) — dùng làm đối tượng thử nghiệm trực tiếp 9 câu lệnh ở 3 cấp độ (Cơ bản – Cải tiến – Nâng cao) để kiểm chứng sự thay đổi chất lượng câu trả lời trong tóm tắt lịch sử âm nhạc, giải thích hòa thanh và tạo câu hỏi ôn tập.\n" +
        "• Công cụ hỗ trợ: Microsoft Word (lập bảng so sánh kết quả và biên tập báo cáo).",
      errorsAndFix:
        "• Khi dùng Prompt cơ bản, AI trả lời quá chung chung, dài dòng hoặc dùng thuật ngữ nhạc lý dịch chưa chuẩn tiếng Việt; đã khắc phục bằng cách gán vai trò (Giảng viên Âm nhạc), giới hạn phạm vi đối tượng và cung cấp ví dụ mẫu (Few-shot).\n" +
        "• Một số câu hỏi trắc nghiệm do AI tạo ban đầu bị trùng ý hoặc đáp án nhiễu quá dễ đoán; đã bổ sung yêu cầu phân mức độ nhận thức (Biết – Hiểu – Vận dụng) và giải thích chi tiết từng đáp án.",
      result:
        "Hoàn thành báo cáo thực hành Bài 03 gồm hệ thống 9 câu lệnh mẫu ở 3 cấp độ, bảng so sánh kết quả thử nghiệm thực tế trên ChatGPT, phần phân tích chuyên sâu và 6 nguyên tắc vàng khi giao tiếp với AI.",
      productLink: ""
    },
    {
      code: "Bài 04",
      status: "Đang cập nhập",
      title: "Làm việc nhóm trực tuyến & Lập kế hoạch tổ chức hoạt động Âm nhạc",
      shortDesc: "Tổ chức họp nhóm qua Google Meet, phân công vai trò và hoàn thiện kế hoạch tiết học Thường thức âm nhạc / Hát tập thể bậc THCS.",
      goal: "Rèn luyện kỹ năng cộng tác trực tuyến: biết lập kế hoạch điều hành cuộc họp qua Google Meet, phân chia vai trò điều phối – thư ký – chuyên môn hợp lý và tổng hợp biên bản thống nhất sản phẩm của nhóm.",
      process:
        "1. Lập kế hoạch tổ chức cuộc họp trực tuyến (25–30 phút trên Google Meet) với chủ đề: Xây dựng kế hoạch tổ chức tiết học hát bài “Niềm vui của em” (Nhạc và lời: Nguyễn Huy Hùng) cho học sinh lớp 6.\n" +
        "2. Phân công 5 vai trò cụ thể cho từng thành viên trong nhóm: Người điều phối, Phụ trách nội dung chuyên môn, Phụ trách tiến trình dạy học, Thư ký ghi biên bản và Phụ trách học liệu – slide.\n" +
        "3. Tiến hành họp theo khung thời gian 7 bước: thống nhất tiêu chí chọn bài hát, mục tiêu tiết dạy (Kiến thức – Kỹ năng – Phẩm chất) và kịch bản tổ chức hoạt động 45 phút.\n" +
        "4. Thư ký tổng hợp nội dung thảo luận, lập bảng phân công nhiệm vụ sau cuộc họp, nhận xét ưu – nhược điểm của từng thành viên và xuất tệp báo cáo.",
      toolsUsed:
        "• Công cụ cộng tác trực tuyến: Google Meet (họp nhóm trực tuyến và chia sẻ màn hình), Google Docs & Google Drive (cùng biên tập kế hoạch tiết học, ghi biên bản theo thời gian thực và lưu trữ tài nguyên chung).\n" +
        "• Công cụ AI & Mục đích sử dụng: ChatGPT — hỗ trợ gợi ý khung phân bổ thời gian 45 phút và ý tưởng trò chơi khởi động tiết học hát; nhóm tự thảo luận, điều chỉnh chuyên môn và biên soạn kế hoạch chi tiết.",
      errorsAndFix:
        "• Thời gian họp trực tuyến chỉ kéo dài 30 phút nên phần thảo luận cách xử lý tình huống học sinh hát lệch nhịp hoặc ngại biểu diễn trước lớp chưa thật sâu; nhóm đã thống nhất phân công nhiệm vụ bổ sung chi tiết vào bảng kế hoạch sau cuộc họp.\n" +
        "• Chuẩn bị sẵn phương án nhạc beat dự phòng và thanh phách/trống nhỏ để tránh lúng túng nếu thiết bị âm thanh gặp trục trặc.",
      result:
        "Hoàn thiện bộ Kế hoạch tổ chức cuộc họp trực tuyến & Biên bản làm việc nhóm đầy đủ (gồm lịch trình điều hành, giáo án tóm tắt 45 phút, bảng phân công sản phẩm và đánh giá thành viên).",
      productLink: ""
    },
    {
      code: "Bài 05",
      status: "Hoàn thành",
      title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
      shortDesc: "Ứng dụng công cụ AI tạo sinh thiết kế kịch bản, thuyết trình và sản xuất video phục dựng kiến trúc lịch sử.",
      goal: "Tìm hiểu chuyên sâu các công cụ AI tạo sinh, rèn luyện kỹ năng viết câu lệnh (prompt) chuẩn xác để xây dựng nội dung thuyết trình và tạo video minh họa trực quan phục dựng kiến trúc lịch sử Việt Nam.",
      process:
        "1. Nghiên cứu công cụ AI và quay video màn hình ghi lại toàn bộ quá trình thao tác thực tế từ bước khởi đầu.\n" +
        "2. Lên kịch bản khung 04 giai đoạn (Tình huống thực tế -> Đặt vấn đề & dẫn chứng khoa học -> Giải pháp công nghệ & trực quan hóa -> Tổng kết) và biên tập lời thoại súc tích.\n" +
        "3. Viết prompt giàu hình ảnh mô tả không gian Hoàng thành Thăng Long thời Lý / Kinh thành Huế trong sương sớm, sau đó dùng Google Veo 3 hoặc Luma Dream Machine để tạo thước phim chuyển động mượt mà.",
      toolsUsed:
        "• Công cụ AI tạo sinh & Mục đích sử dụng:\n" +
        "  - ChatGPT / Gemini: Lên ý tưởng kịch bản 4 giai đoạn, tối ưu lời thoại thuyết trình và viết prompt tiếng Anh chi tiết mô tả bối cảnh, ánh sáng, góc máy.\n" +
        "  - Google Veo 3 / Luma Dream Machine: Tạo video chuyển động (Text-to-Video) phục dựng không gian kiến trúc Hoàng thành Thăng Long / Kinh thành Huế.\n" +
        "• Công cụ biên tập & ghi hình: CapCut (cắt ghép video, lồng tiếng, chèn phụ đề) và OBS / quay màn hình tích hợp (ghi lại quá trình thao tác AI thực tế).",
      errorsAndFix:
        "Khó khăn ban đầu trong việc kiểm soát chuyển động góc máy và giữ nét kiến trúc cổ đặc trưng (mái ngói âm dương, hành lang sâu) khi tạo video bằng AI. Nhóm đã khắc phục bằng cách tinh chỉnh prompt chi tiết hơn về bối cảnh, ánh sáng, chuyển động camera, đồng thời tổ chức họp góp ý chéo để tối ưu hóa sản phẩm chung.",
      result:
        "Hoàn thiện bộ sản phẩm báo cáo nhóm 4 gồm: Kịch bản thuyết trình mạch lạc theo 4 giai đoạn, video ghi hình thao tác sử dụng công cụ AI thực tế và thước phim điện ảnh minh họa phục dựng kiến trúc lịch sử chất lượng cao.",
      productLink: "files/bai5.pdf",
      videoLink: "https://www.youtube.com/watch?v=DzyYBuSJ55o"
    },
    {
      code: "Bài 06",
      status: "Hoàn thành",
      title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
      shortDesc: "Tìm hiểu quy định liêm chính học thuật, thực hành dùng AI có kiểm chứng khi soạn nội dung dạy học Âm nhạc THCS và xây dựng bộ 7 nguyên tắc cá nhân.",
      goal: "Nắm vững các quy định về liêm chính học thuật khi dùng AI của Bộ GD&ĐT và ĐHQGHN; thực hành ứng dụng ChatGPT có kiểm chứng để chuẩn bị nội dung dạy học cảm thụ dân ca Việt Nam cho học sinh THCS; đúc kết bộ 7 nguyên tắc đạo đức cá nhân và thiết kế Infographic trực quan.",
      process:
        "Bước 1: Tổng hợp và phân tích Thông tư 49/2026/TT-BGDĐT cùng hướng dẫn của ĐHQGHN và VNU-LIC. Bước 2: Dùng ChatGPT qua 3 lượt prompt để lập dàn ý, tìm từ khóa và gợi ý cách diễn đạt cho bài thuyết trình cảm thụ dân ca Quan họ lớp 7. Bước 3: Đối chiếu kết quả AI với Chương trình GDPT môn Âm nhạc 2018, tự viết lại nội dung và trích dẫn chuẩn Harvard. Bước 4: Phân tích 3 vấn đề đạo đức đặc thù ngành Sư phạm Âm nhạc, xây dựng bộ 7 nguyên tắc cá nhân và thiết kế Infographic minh họa.",
      toolsUsed:
        "• Công cụ AI & Mục đích sử dụng: ChatGPT — hỗ trợ gợi ý dàn ý, từ khóa chuyên môn và cách diễn đạt sư phạm qua 3 lượt prompt cho bài dạy cảm thụ dân ca Quan họ lớp 7 (có đối chiếu, kiểm chứng lại với Chương trình GDPT môn Âm nhạc 2018 và tự viết lại toàn bộ nội dung chính).\n" +
        "• Công cụ thiết kế & văn phòng: Canva (thiết kế Infographic trực quan tóm tắt quy trình 5 bước và 7 nguyên tắc đạo đức AI), Microsoft Word (trình bày báo cáo và trích dẫn chuẩn Harvard).",
      errorsAndFix:
        "Khó khăn gặp phải là các quy định hiện hành mới nêu nguyên tắc chung, chưa hướng dẫn chi tiết cho sản phẩm thực hành âm nhạc (phối khí, nhạc đệm), đồng thời câu trả lời ban đầu của AI còn chung chung và chưa bám sát thuật ngữ chương trình mới. Cách xử lý: Chủ động xác định ranh giới tự thực hiện phần chuyên môn cốt lõi, đối chiếu trực tiếp dàn ý với văn bản Chương trình GDPT môn Âm nhạc 2018 để bổ sung đúng tên năng lực đặc thù và lấy ví dụ thực tế từ bài 'Bèo dạt mây trôi'.",
      result:
        "Hoàn thiện báo cáo thực hành chi tiết 5 trang (kèm danh mục tài liệu tham khảo chuẩn Harvard) và 01 Infographic tóm tắt quy trình 5 bước cùng bộ 7 nguyên tắc sử dụng AI có trách nhiệm dành cho sinh viên Sư phạm Âm nhạc.",
      productLink: "files/bai6.pdf"
    }
  ],

  // -------------------------------------------------------------------------
  // CÂU 3. TRANG TỔNG KẾT – CONCLUSION (tong-ket.html)
  // Đáp ứng đủ 4 gạch đầu dòng yêu cầu:
  // (1) Trải nghiệm và cảm nhận cá nhân về quá trình thực hiện Portfolio
  // (2) Những kiến thức và kỹ năng quan trọng nhất đã tiếp thu được
  // (3) Điểm tâm đắc nhất và những thách thức đã gặp phải khi xây dựng Portfolio
  // (4) Đường liên kết dẫn đến các trang bài tập đã hoàn thành (tự động render từ `assignments` bên trên)
  // -------------------------------------------------------------------------
  conclusion: {
    experienceAndFeelings:
      "Quá trình thực hiện 6 bài tập trong học phần Nhập môn Công nghệ số và AI là một trải nghiệm rất mới mẻ đối với một sinh viên Sư phạm Âm nhạc như mình. Từ chỗ trước đây chủ yếu quen với việc tập đàn, xướng âm và ghi chép trên giấy, mình đã từng bước làm quen với cách quản lý dữ liệu khoa học, tra cứu tài liệu chuyên ngành, cộng tác trực tuyến và ứng dụng AI vào soạn bài. Việc tự tay hệ thống lại toàn bộ sản phẩm lên Portfolio giúp mình thấy việc học trở nên chủ động, bài bản và thực tế hơn rất nhiều.",

    keyKnowledgeAndSkills:
      "Qua 6 bài thực hành, mình đã nắm vững kỹ năng tổ chức thư mục tệp tin, tìm kiếm và thẩm định độ tin cậy của học liệu thanh nhạc, cũng như làm việc nhóm hiệu quả qua Google Meet và Google Docs. Quan trọng nhất là tư duy đặt câu lệnh (Prompt) đúng trọng tâm để khai thác AI tạo sinh làm học liệu trực quan, đồng thời luôn giữ vững nguyên tắc kiểm chứng thông tin và liêm chính học thuật trong học tập lẫn giảng dạy âm nhạc.",

    highlightAndChallenges:
      "Điểm mình tâm đắc nhất ở Portfolio này là giao diện mang đậm sắc màu âm nhạc (tích hợp cả phím đàn Kalimba tương tác) và lưu trữ gọn gàng toàn bộ 6 bài thực hành để sau này dùng làm tư liệu giảng dạy. Thách thức lớn nhất mình gặp phải trong quá trình làm 6 bài là việc tinh chỉnh câu lệnh để AI hiểu đúng thuật ngữ nhạc lý tiếng Việt, kiểm soát hình ảnh kiến trúc cổ khi tạo video, cũng như rà soát đối chiếu các nguồn tài liệu thanh nhạc sao cho chuẩn xác; nhờ kiên nhẫn thử nghiệm và đối chiếu với chương trình chuẩn, mình đã hoàn thiện trọn vẹn các sản phẩm đúng mục tiêu đề ra."
  }
};
